/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from './../images/favicon.ico';

function SEO({
  lang,
  meta,
  title,
  slug,
  canonical,
  metadesc,
  keywords,
  social_share_summary,
  social_share_desc,
  social_share_image,
  noindex,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
          }
        }
      }
    `
  );

  let isStaging = process.env.HOST_ENV === 'staging';

  const isIndexed = isStaging || noindex ? 'noindex,nofollow' : 'index,follow';

  let loadGTM = false;

  if (typeof window !== 'undefined') {
    loadGTM =
      window.location.href.includes('testsigma.com') ||
      window.location.href.includes('https://www.testsigma.com/') ||
      window.location.href.includes('https://testsigma.com/');
  }

  useEffect(() => {
    if (loadGTM) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5F8HTVT');
        `;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>{title}</title>
          <meta name='robots' content={isIndexed} />
          <meta name='description' content={metadesc} />
          <meta name='keywords' content={keywords} />
          <meta
            name='google-site-verification'
            content='58TM3lGyGn6c2Bj0PvPQSNzrd9_yBsHs2BjJ6KMHlRU'
          />
          <meta name='author' content={site.siteMetadata.author} />
          <meta name='og:title' content={title} />
          <meta name='og:description' content={social_share_desc} />
          <meta name='og:image' content={social_share_image} />
          <meta name='og:url' content={`https://testsigma.com${slug}`} />
          <meta name='og:type' content='website' />
          <meta name='og:site_name' content='Testsigma Docs' />
          <meta name='twitter:creator' content={site.siteMetadata.author} />
          <meta name='twitter:card' content={social_share_summary} />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={social_share_desc} />
          <meta name='twitter:image' content={social_share_image} />
          <meta
            name='twitter:domain'
            content={`https://testsigma.com${slug}`}
          />
          <meta name='twitter:site' content='@testsigmainc' />
          {/* fav icon */}
          <link rel='icon' href={favicon} />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href={'./../images/favicons/apple-touch-icon.png'}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='48x48'
            href={'./../images/favicons/favicon-48x48.png'}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={'./../images/favicons/favicon-32x32.png'}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={'./../images/favicons/favicon-16x16.png'}
          />
          <link rel='manifest' href={'./../images/favicons/site.webmanifest'} />
          <link
            rel='mask-icon'
            href={'./../images/favicons/safari-pinned-tab.svg'}
            color='#00B2BD'
          />
          <meta
            httpEquiv='Content-Security-Policy'
            content="default-src 'self' https://*.testsigma.com https://stream.mux.com https://stream.hubilo.com https://s3.us-east-1.amazonaws.com;
    style-src 'self' https://*.testsigma.com https://fonts.googleapis.com 'unsafe-inline' https://*.freshchat.com;
    font-src 'self' https://fonts.gstatic.com https://*.testsigma.com data: blob:;
    img-src * https: data: blob: about:;
    script-src * https: 'unsafe-inline' 'unsafe-eval';
    worker-src https: blob: 'unsafe-eval' 'unsafe-inline';
    frame-ancestors https://testsigma.com https://*.testsigma.com https://app.storylane.io/;
    upgrade-insecure-requests;
    frame-src * https:;
    connect-src 'self' https: http: wss:;
    object-src https: http:;"
          />
          <meta httpEquiv='X-XSS-Protection' content='1; mode=block' />
          <meta
            httpEquiv='Strict-Transport-Security'
            content='max-age=31536000'
          />
          <meta httpEquiv='X-Content-Type-Options' content='nosniff' />
          <meta
            httpEquiv='cache-control'
            content='private, must-revalidate, post-check=0, pre-check=0'
          />
          <meta httpEquiv='cache-control' content='max-age=31536000' />

          {/* fonts */}
          <link rel='dns-prefetch' href='https://fonts.gstatic.com' />
          <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
          <link crossOrigin rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap'
            rel='stylesheet'
          />
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" /> */}
          {/* Bootstrap */}
          {/* <link rel="dns-prefetch" href="https://stackpath.bootstrapcdn.com" /> */}
          {/* <link crossOrigin rel="preconnect" href="https://stackpath.bootstrapcdn.com" /> */}
          {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" /> */}
          {/* canonical */}
          {canonical ? (
            <link rel='canonical' href={canonical} />
          ) : (
            <link rel='canonical' href={`https://testsigma.com${slug}`} />
          )}
          {/* Algolia Instantsearch IE11 support v3 */}
          {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes" /> */}
          {/*  */}
          {/* Algolia Instantsearch IE11 support v4 */}
          <link rel='dns-prefetch' href='https://polyfill.io' />
          <link crossOrigin rel='preconnect' href='https://polyfill.io' />
          <script src='https://polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries' />
          {/* Algolia API v4 IE11 support  */}
          <script src='https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.entries%2CObject.assign' />
          <script
            async
            defer
            type='text/javascript'
            charSet='utf-8'
            src='https://js.hsforms.net/forms/embed/v2.js'
          />
          <script
            type='text/javascript'
            id='hs-script-loader'
            async
            defer
            src='//js.hs-scripts.com/23341221.js'
          ></script>
          <script type='application/ld+json'>
            {'{' +
              '"@context": "https://schema.org/",' +
              '"@type": "BreadcrumbList",' +
              '"itemListElement":' +
              '[' +
              '{' +
              '"@type":' +
              '"ListItem",' +
              '"position":' +
              '1,' +
              '"name":' +
              '"Testsigma",' +
              '"item":' +
              '"https://testsigma.com/"' +
              '},' +
              '{' +
              '"@type":' +
              '"ListItem",' +
              '"position":' +
              '2,' +
              '"name":' +
              '"' +
              title +
              '"' +
              ',' +
              '"item":' +
              '"https://testsigma.com/docs/"' +
              '},' +
              '{' +
              '"@type":' +
              '"ListItem",' +
              '"position":' +
              '3,' +
              '"name":' +
              '"' +
              title +
              '"' +
              ',' +
              '"item":' +
              '"https://testsigma.com' +
              slug +
              '"' +
              '}' +
              ']' +
              '}'}
          </script>
          {loadGTM && (
            <>
              <noscript>
                {`
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5F8HTVT"
                    height="0" width="0" style="display:none;visibility:hidden">
                    </iframe>
                    `}
              </noscript>
            </>
          )}
        </Helmet>
      </HelmetProvider>
    </>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  metadesc: PropTypes.string,
  keywords: PropTypes.string,
  social_share_summary: PropTypes.string,
  social_share_desc: PropTypes.string,
  social_share_image: PropTypes.string,
  noindex: PropTypes.bool,
};

export default SEO;
