const path = require('path');
const glob = require('glob');
const fs = require('fs');
const frontmatter = require('@github-docs/frontmatter');
const { v4: uuidv4 } = require('uuid');
const { createFilePath } = require('gatsby-source-filesystem');
const redirects = require('./src/redirects.json');
const leftNavTitle = require('./src/left-nav-title.json');

const ignorePaths = [];

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              metadesc
              canonical
              keywords
              social_share_summary
              social_share_desc
              social_share_image
              noindex
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    if (node.fields.slug.includes('-')) {
      const underscoreSlug = node.fields.slug.replace(/-/g, '_');

      createRedirect({
        fromPath: underscoreSlug,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: node.fields.slug,
      });
    }
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/page.jsx'),
      context: {
        slug: node.fields.slug,
        prev:
          index === 0
            ? null
            : result.data.allMarkdownRemark.edges[index - 1].node,
        next:
          index === result.data.allMarkdownRemark.edges.length - 1
            ? null
            : result.data.allMarkdownRemark.edges[index + 1].node,
      },
    });
  });
};

exports.onPostBuild = () => {
  const sourcePath = path.join(__dirname, 'src/pages/docs/sitemap.xml');
  const destinationPath = path.join(__dirname, 'public/docs/sitemap.xml');

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log('Sitemap.xml copied to public folder!');
  } else {
    console.error('Sitemap.xml not found in src/pages/docs/');
  }
};

/* Create Header and Footer
/************************************************************************ */
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const prepareNode = (obj, name) => {
    const data = {
      key: uuidv4(),
      value: JSON.stringify(obj),
    };
    const node = JSON.stringify(data);
    const nodeMeta = {
      id: createNodeId(`my-data-${data.key}`),
      parent: null,
      children: [],
      internal: {
        type: name,
        mediaType: 'text/json',
        content: node,
        contentDigest: createContentDigest(data),
      },
    };

    const output = { ...data, ...nodeMeta };
    return output;
  };

  const { createNode } = actions;

  const getDirectories = (src) => glob.sync(`${src}/**/*`);
  const paths = getDirectories('./src/pages/docs')
    .filter((val) => val.slice(-3) === '.md')
    .map((val) => {
      const { data } = frontmatter(fs.readFileSync(val));
      const order = data.order || 200;
      return [val, order];
    })
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map((val) => {
      let newVal = '';
      newVal = val[0].replace(/\.\/src\/pages/g, '');
      newVal = newVal.substring(0, newVal.length - 3);
      newVal =
        newVal.slice(-5) === 'index'
          ? newVal.substring(0, newVal.length - 5)
          : newVal;
      return `${newVal}/`;
    })
    .filter((val) => !ignorePaths.includes(val));

  const output = {};

  paths.forEach((val) => {
    let split = val.split('/');
    split = split.filter((url) => url !== '');

    let current = output;
    split.forEach((part) => {
      if (current[part]) current[part] = current[part];
      else {
        current[part] = {};
        if (leftNavTitle[part]) {
          Object.keys(leftNavTitle[part]).forEach((key) => {
            if (val.indexOf(key) === 0) {
              //console.log(key);
              current[part] = { leftNavTitle: leftNavTitle[part][key] };
            }
          });
        }
      }
      current = current[part];
    });
    current.url = `/${split.join('/')}/`;
  });
  //console.log(output.docs)
  createNode(prepareNode(output.docs, 'leftNavLinks'));
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      pluginCreator___NODE: String
    }
  `);
};
