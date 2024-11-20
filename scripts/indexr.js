require('dotenv').config({
  path: `.env`,
});
const Typesense = require('typesense');
const { request } = require('graphql-request');

const pageQuery = `
  query {
    docs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/docs/" }
      }
    ) {
      edges {
        node {
          headings(depth: h4) {
            value
          }
          objectID: id
          frontmatter {
            title
            search_keyword
            contextual_links {
              type
              name
              url
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200000)
        }
      }
    }
  }
`;

function pageToTypesenseRecord({ node }) {
  const { id, frontmatter, fields = {}, headings = [], ...rest } = node;

  const formattedHeadings = headings.map((h) => h.value || '').filter(Boolean);
  return {
    objectID: id,
    title: frontmatter.title || '',
    search_keyword: String(frontmatter.search_keyword || ''),
    slug: fields.slug || '',
    excerpt: frontmatter.excerpt || '',
    headings: formattedHeadings,
    ...rest,
  };
}

async function indexData() {
  try {
    const client = new Typesense.Client({
      nodes: [
        {
          host: process.env.TYPESENSE_HOST,
          port: process.env.TYPESENSE_PORT,
          protocol: process.env.TYPESENSE_PROTOCOL,
        },
      ],
      apiKey: process.env.TYPESENSE_API_KEY,
    });

    let collectionExists = false;
    try {
      await client.collections(process.env.TYPESENSE_COLLECTION).retrieve();
      collectionExists = true;
    } catch (error) {
      if (error.httpStatus !== 404) {
        throw error;
      }
    }

    if (collectionExists) {
      await client.collections(process.env.TYPESENSE_COLLECTION).delete();
      console.log(
        `Collection ${process.env.TYPESENSE_COLLECTION} deleted successfully.`
      );
    }

    await client.collections().create({
      name: process.env.TYPESENSE_COLLECTION,
      fields: [
        { name: 'objectID', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'search_keyword', type: 'string' },
        { name: 'slug', type: 'string' },
        { name: 'excerpt', type: 'string' },
        { name: 'headings', type: 'string[]', facet: false },
      ],
    });
    console.log(
      `Collection ${process.env.TYPESENSE_COLLECTION} created successfully.`
    );

    const response = await request(
      'http://127.0.0.1:8000/___graphql',
      pageQuery
    );
    console.log('response', response);
    const data = await response;

    const records = data.docs.edges.map(pageToTypesenseRecord);

    await client
      .collections(process.env.TYPESENSE_COLLECTION)
      .documents()
      .import(records)
      .then((typesenseResponse) => {
        // check the output of the response in the console
        console.log('typesenseResponse', typesenseResponse);
        console.log(`🎉 Successfully indexed records to Typesense search.`);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log('Indexing complete!');
  } catch (error) {
    console.error('Indexing error:', error);
  }
}

indexData();
