require('dotenv').config({
  path: `.env`,
});
const Typesense = require('typesense');
const { request } = require("graphql-request");

const pageQuery = `
  query {
    docs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/docs/" }
      }
    ) {
      edges {
        node {
          headings(depth: h3) {
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
          excerpt(pruneLength: 6700)
        }
      }
    }
  }
`;

function pageToTypesenseRecord({ node }) {
  const { id, frontmatter, ...rest } = node;
  console.log('node', node);
  return {
    objectID: id,
    ...frontmatter,
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

    const response = await request('http://localhost:8000/___graphql', pageQuery);
    console.log('response', response);
    const data = await response;

    const records = data.docs.edges.map(pageToTypesenseRecord);

    await client.collections(process.env.TYPESENSE_COLLECTION).documents().import(records).then((typesenseResponse) => {
      // check the output of the response in the console
      console.log('typesenseResponse', typesenseResponse);
      console.log(
        `🎉 Successfully indexed records to Typesense search.`
      );
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
