/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from './../images/favicon.ico';

function SEO({
  lang = 'en',
  meta = [],
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

  return (
    <>
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
      <meta name='twitter:domain' content={`https://testsigma.com${slug}`} />
      <meta name='twitter:site' content='@testsigmainc' />
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
      <meta httpEquiv='Strict-Transport-Security' content='max-age=31536000' />
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />
      <meta httpEquiv='cache-control' content='public, max-age=31536000' />

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
      {canonical ? (
        <link rel='canonical' href={canonical} />
      ) : (
        <link rel='canonical' href={`https://testsigma.com${slug}`} />
      )}
      <link rel='dns-prefetch' href='https://polyfill.io' />
      <link crossOrigin rel='preconnect' href='https://polyfill.io' />
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
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5F8HTVT');",
        }}
      />
      <script
        id='vwoCode'
        dangerouslySetInnerHTML={{
          __html: `window._vwo_code||(function(){var w=window,d=document;var account_id=720884,version=2.2,settings_tolerance=1000,hide_element='body',hide_element_style='opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important';if(f=!1,v=d.querySelector('#vwoCode'),cc={},-1<d.URL.indexOf('__vwo_disable__')||w._vwo_code)return;try{var e=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=e&&'object'==typeof e?e:{}}catch(e){}function r(t){try{return decodeURIComponent(t)}catch(e){return t}}var s=function(){var e={combination:[],combinationChoose:[],split:[],exclude:[],uuid:null,consent:null,optOut:null},t=d.cookie||'';if(!t)return e;for(var n,i,o=/(?:^|;\s*)(?:(_vis_opt_exp_(\d+)_combi=([^;]*))|(_vis_opt_exp_(\d+)_combi_choose=([^;]*))|(_vis_opt_exp_(\d+)_split=([^:;]*))|(_vis_opt_exp_(\d+)_exclude=[^;]*)|(_vis_opt_out=([^;]*))|(_vwo_global_opt_out=[^;]*)|(_vwo_uuid=([^;]*))|(_vwo_consent=([^;]*)))/g;null!==(n=o.exec(t));)try{n[1]?e.combination.push({id:n[2],value:r(n[3])}):n[4]?e.combinationChoose.push({id:n[5],value:r(n[6])}):n[7]?e.split.push({id:n[8],value:r(n[9])}):n[10]?e.exclude.push({id:n[11]}):n[12]?e.optOut=r(n[13]):n[14]?e.optOut=!0:n[15]?e.uuid=r(n[16]):n[17]&&(i=r(n[18]),e.consent=i&&3<=i.length?i.substring(0,3):null)}catch(e){}return e}();function i(){var e=function(){if(w.VWO&&Array.isArray(w.VWO))for(var e=0;e<w.VWO.length;e++){var t=w.VWO[e];if(Array.isArray(t)&&('setVisitorId'===t[0]||'setSessionId'===t[0]))return!0}return!1}(),t='a='+account_id+'&u='+encodeURIComponent(w._vis_opt_url||d.URL)+'&vn='+version+'&ph=1'+('undefined'!=typeof platform?'&p='+platform:'')+'&st='+w.performance.now();e||((n=function(){var e,t=[],n={},i=w.VWO&&w.VWO.appliedCampaigns||{};for(e in i){var o=i[e]&&i[e].v;o&&(t.push(e+'-'+o+'-1'),n[e]=!0)}if(s&&s.combination)for(var r=0;r<s.combination.length;r++){var a=s.combination[r];n[a.id]||t.push(a.id+'-'+a.value)}return t.join('|')}())&&(t+='&c='+n),(n=function(){var e=[],t={};if(s&&s.combinationChoose)for(var n=0;n<s.combinationChoose.length;n++){var i=s.combinationChoose[n];e.push(i.id+'-'+i.value),t[i.id]=!0}if(s&&s.split)for(var o=0;o<s.split.length;o++)t[(i=s.split[o]).id]||e.push(i.id+'-'+i.value);return e.join('|')}())&&(t+='&cc='+n),(n=function(){var e={},t=[];if(w.VWO&&Array.isArray(w.VWO))for(var n=0;n<w.VWO.length;n++){var i=w.VWO[n];if(Array.isArray(i)&&'setVariation'===i[0]&&i[1]&&Array.isArray(i[1]))for(var o=0;o<i[1].length;o++){var r,a=i[1][o];a&&'object'==typeof a&&(r=a.e,a=a.v,r&&a&&(e[r]=a))}}for(r in e)t.push(r+'-'+e[r]);return t.join('|')}())&&(t+='&sv='+n)),s&&s.optOut&&(t+='&o='+s.optOut);var n=function(){var e=[],t={};if(s&&s.exclude)for(var n=0;n<s.exclude.length;n++){var i=s.exclude[n];t[i.id]||(e.push(i.id),t[i.id]=!0)}return e.join('|')}();return n&&(t+='&e='+n),s&&s.uuid&&(t+='&id='+s.uuid),s&&s.consent&&(t+='&consent='+s.consent),w.name&&-1<w.name.indexOf('_vis_preview')&&(t+='&pM=true'),w.VWO&&w.VWO.ed&&(t+='&ed='+w.VWO.ed),t}code={nonce:v&&v.nonce,library_tolerance:function(){return'undefined'!=typeof library_tolerance?library_tolerance:void 0},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){return performance.getEntriesByName('first-contentful-paint')[0]?'':'string'==typeof cc.hE?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){var t;f||(f=!0,(t=d.getElementById('_vis_opt_path_hides'))&&t.parentNode.removeChild(t),e&&((new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e))},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript',e.src?t.src=e.src:t.text=e.text,v&&t.setAttribute('nonce',v.nonce),d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){t=t||{};var n=new XMLHttpRequest;n.open('GET',e,!0),n.withCredentials=!t.dSC,n.responseType=t.responseType||'text',n.onload=function(){if(t.onloadCb)return t.onloadCb(n,e);200===n.status?_vwo_code.addScript({text:n.responseText}):_vwo_code.finish('&e=loading_failure:'+e)},n.onerror=function(){if(t.onerrorCb)return t.onerrorCb(e);_vwo_code.finish('&e=loading_failure:'+e)},n.send()},init:function(){var e,t=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish()},t),'body'!==this.hide_element()?(n=d.createElement('style'),e=(t=this.hide_element())?t+this.hide_element_style():'',t=d.getElementsByTagName('head')[0],n.setAttribute('id','_vis_opt_path_hides'),v&&n.setAttribute('nonce',v.nonce),n.setAttribute('type','text/css'),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(d.createTextNode(e)),t.appendChild(n)):(n=d.getElementsByTagName('head')[0],(e=d.createElement('div')).style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;',e.setAttribute('id','_vis_opt_path_hides'),e.classList.add('_vis_hide_layer'),n.parentNode.insertBefore(e,n.nextSibling));var n='https://dev.visualwebsiteoptimizer.com/j.php?'+i();-1!==w.location.search.indexOf('_vwo_xhr')?this.addScript({src:n}):this.load(n+'&x=true',{l:1})}};w._vwo_code=code;code.init();})();`,
        }}
      />
    </>
  );
}

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
