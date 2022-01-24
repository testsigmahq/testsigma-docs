
require('dotenv').config({
  path: `.env`,
});

const pageQuery = `{
  docs: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/docs/" },
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
        excerpt(
          pruneLength: 6700
        )
      }
    }
  }
}`;


function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  };
}

const settings = { attributesToSnippet: ['excerpt:20'] };

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.docs.edges.map(pageToAlgoliaRecord),
    indexName: 'OS Docs',
    settings,
  },
];


module.exports = {
  assetPrefix: `https://d3qczh57rxoojd.cloudfront.net`,
  siteMetadata: {
    title: 'Testsigma Documentation',
    description: '',
    author: 'Testsigma',
    siteUrl: 'https://testsigma.com/docs/'
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              loadingStrategy: 'lazy',
              containerClass: "embedVideo-container",
              iframeId: false,
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800, // as this doc repo does not require more than 900px size images.
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`],
            },
          },
          'gatsby-remark-check-links',
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                danger: {
                  classes: "alert alert-danger",
                  title: "optional",
                },
                info: {
                  classes: "alert alert-info",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "docs.testsigma.com",
        protocol: "https",
        hostname: "testsigma.com/docs/",
        generateRedirectObjectsForPermanentRedirects: true
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // only index new, changed, deleted records
        matchFields: ['excerpt', 'contextual_links', 'search_keyword', 'headings', 'fields', 'modified'],
        concurrentQueries: false,
      },
    },
    {
      resolve: `gatsby-plugin-freshchat`,
      options: {
          token: "b905859c-c256-471f-ab0a-a4d0829d27ee", // process.env.FRESHCHAT_TOKEN,
          host: "https://wchat.freshchat.com",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-99606664-1", // Google Analytics
          "AW-777462306", // Google Tag Manager
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      }
    },
  ],
};
