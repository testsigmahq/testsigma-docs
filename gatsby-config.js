
require('dotenv').config({
  path: `.env`,
});



module.exports = {
  assetPrefix: process.env.ASSET_HOST,
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
            'gatsby-plugin-react-helmet',
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
        bucketName: process.env.BUCKET_NAME,
        protocol: "https",
        hostname: process.env.HOST_NAME,
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
      resolve: `gatsby-plugin-ts-freshchat`,
      options: {
          token: process.env.FRESHCHAT_TOKEN,
          host: "https://wchat.freshchat.com",
          appEmbedUrl: "https://app.testsigma.com/ui/dashboard"
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GTAG_TRACKING_ID_FOR_GA4, // Google Analytics 4
          process.env.GTAG_TRACKING_ID_FOR_GTAG, // Google Tag Manager
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      }
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: ['TYPESENSE_HOST', 'TYPESENSE_PORT', 'TYPESENSE_PROTOCOL', 'TYPESENSE_API_KEY', "TYPESENSE_SEARCH_API_KEY", "TYPESENSE_COLLECTION"],
      },
    },
  ],
};
