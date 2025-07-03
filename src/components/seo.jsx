import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';

export default function SEO({
  title,
  slug,
  canonical,
  metadesc,
  keywords,
  social_share_summary,
  social_share_desc,
  social_share_image,
  noindex,
  lang = 'en',
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          author
        }
      }
    }
  `);

  const isStaging = process.env.HOST_ENV === 'staging';
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
      <title>{title}</title>
      {canonical ? (
        <link rel='canonical' href={canonical} />
      ) : (
        <link rel='canonical' href={`https://testsigma.com${slug}`} />
      )}
      <meta name='robots' content={isIndexed} />
      <meta name='description' content={metadesc} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={site.siteMetadata.author} />
      <meta
        name='google-site-verification'
        content='58TM3lGyGn6c2Bj0PvPQSNzrd9_yBsHs2BjJ6KMHlRU'
      />

      {/* Open Graph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={social_share_desc} />
      <meta property='og:image' content={social_share_image} />
      <meta property='og:url' content={`https://testsigma.com${slug}`} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Testsigma Docs' />

      {/* Twitter */}
      <meta name='twitter:card' content={social_share_summary} />
      <meta name='twitter:creator' content={site.siteMetadata.author} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={social_share_desc} />
      <meta name='twitter:image' content={social_share_image} />
      <meta name='twitter:domain' content={`https://testsigma.com${slug}`} />
      <meta name='twitter:site' content='@testsigmainc' />

      {/* Favicons */}
      <link rel='icon' href='./../images/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='./../images/favicons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='48x48'
        href='./../images/favicons/favicon-48x48.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='./../images/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='./../images/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='./../images/favicons/site.webmanifest' />
      <link
        rel='mask-icon'
        href='./../images/favicons/safari-pinned-tab.svg'
        color='#00B2BD'
      />

      {/* Fonts */}
      <link rel='dns-prefetch' href='https://fonts.gstatic.com' />
      <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap'
        rel='stylesheet'
      />

      {/* Security Meta */}
      <meta httpEquiv='X-XSS-Protection' content='1; mode=block' />
      <meta httpEquiv='Strict-Transport-Security' content='max-age=31536000' />
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />
      <meta
        httpEquiv='cache-control'
        content='private, must-revalidate, post-check=0, pre-check=0'
      />
      <meta httpEquiv='cache-control' content='max-age=31536000' />

      {/* Content Security Policy */}
      <meta
        httpEquiv='Content-Security-Policy'
        content={`default-src 'self' https://*.testsigma.com https://stream.mux.com https://stream.hubilo.com https://s3.us-east-1.amazonaws.com;
        style-src 'self' https://*.testsigma.com https://fonts.googleapis.com 'unsafe-inline' https://*.freshchat.com;
        font-src 'self' https://fonts.gstatic.com https://*.testsigma.com data: blob:;
        img-src * https: data: blob: about:;
        script-src * https: 'unsafe-inline' 'unsafe-eval';
        worker-src https: blob: 'unsafe-eval' 'unsafe-inline';
        frame-ancestors https://testsigma.com https://*.testsigma.com https://app.storylane.io/;
        upgrade-insecure-requests;
        frame-src * https:;
        connect-src 'self' https: http: wss:;
        object-src https: http:;`}
      />

      {/* Breadcrumb structured data */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Testsigma',
              item: 'https://testsigma.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title,
              item: 'https://testsigma.com/docs/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: title,
              item: `https://testsigma.com${slug}`,
            },
          ],
        })}
      </script>

      <link rel='dns-prefetch' href='https://polyfill.io' />
      <link crossOrigin rel='preconnect' href='https://polyfill.io' />
      <script src='https://polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries' />
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
    </>
  );
}
