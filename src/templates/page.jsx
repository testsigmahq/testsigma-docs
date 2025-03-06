/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SearchInputBox from '../components/SearchInputBox';
import MobileView from '../components/MobileView';
import LeftNav from '../components/LeftNav';
import SideBar from '../components/SideBar';
import EditDoc from '../components/EditButton';
import Footer from '../components/Footer';

import 'prismjs/themes/prism-tomorrow.css';
import './page.scss';
import { environment } from '../environment';
import Header from '../components/header';

export default ({ data, pageContext }) => {
  const prev = pageContext.prev
    ? {
        url: `${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null;

  const next = pageContext.next
    ? {
        url: `${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null;

  const post = data.markdownRemark;
  if (environment.isStaging()) {
    post.frontmatter.noindex = true;
  }

  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <SideBar links={post.frontmatter.contextual_links} />;
  }

  const copyToClipBoard = (e) => {
    const str = e.target.parentNode.innerText;
    e.target.className += ' copied ';
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-99999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => {
      e.target.classList.remove('copied');
    }, 300);
  };

  useEffect(() => {
    // finding all code tags in markdown file dynamically which requires copy to clipboard logic.
    const preTags = document.getElementsByTagName('pre');
    const codeTags = document.getElementsByTagName('code');
    if (preTags.length > 0) {
      Object.keys(preTags).map(function (keyName, keyIndex) {
        const originalText = preTags[keyName].innerHTML;
        const icon = document.createElement('i');
        icon.className = 'copytoclipboard';
        if (preTags[keyName]) {
          preTags[keyName].parentNode.appendChild(icon);
          return (preTags[keyName].innerHTML = originalText);
        }
      });
    } else {
      Object.keys(codeTags).map(function (keyName, keyIndex) {
        const originalText = codeTags[keyName].innerHTML;
        const icon = document.createElement('i');
        icon.className = 'copytoclipboard';
        if (preTags[keyName]) {
          preTags[keyName].parentNode.appendChild(icon);
          return (codeTags[keyName].innerHTML = originalText);
        }
      });
    }
    // adding eventlistners to all copytoclipboard icons which generated dynamically for markdown file code tags.
    const copyIcon = document.getElementsByClassName('copytoclipboard');
    Object.keys(copyIcon).map(function (keyName, keyIndex) {
      return copyIcon[keyName].addEventListener('click', copyToClipBoard);
    });
    // when user click any link tag from leftnav prevent scroll position after page content rendered/rerendered/load time.
    if (window.location.href.indexOf('/#') === -1) {
      setTimeout(() => {
        const headerOffset =
          document.getElementById('root_header').offsetHeight;
        const leftNavCurrentUrl = document.querySelector(
          '.isTablet .leftNav .currentUrl'
        );
        const scrollBarAdjustment = 50;
        // when page content changed move scroll bar to starting of the page content title position.
        document.querySelector('body').scrollTo(0, 0);
        if (leftNavCurrentUrl)
          document.querySelector('.isTablet .leftNav').scrollTo({
            top:
              leftNavCurrentUrl.offsetTop -
              (headerOffset + scrollBarAdjustment),
            behavior: 'smooth',
          });
      }, 300);
    }
  });

  return (
    <Layout>
      <SEO
        title={post.frontmatter.page_title || post.frontmatter.title}
        slug={post.fields.slug}
        canonical={post.frontmatter.canonical}
        metadesc={post.frontmatter.metadesc}
        keywords={post.frontmatter.keywords}
        social_share_summary={post.frontmatter.social_share_summary}
        social_share_desc={post.frontmatter.social_share_desc}
        social_share_image={post.frontmatter.social_share_image}
        noindex={post.frontmatter.noindex || false}
      />
      <Header />
      <hr />
      {/*<SubNav></SubNav>*/}
      <div className='w-full'>
        <div className='flex items-stretch'>
          <MobileView></MobileView>
          <nav className='isTablet w-1/4 max-w-sm bg-gray-50'>
            <LeftNav />
          </nav>
          <div className='flex-auto w-4/5'>
            <div className='flex items-stretch w-full'>
              <main className='doc-page w-4/5'>
                <div className='px-20 py-14'>
                  <h1>{post.frontmatter.title}</h1>
                  <span dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </main>
              <aside className='isGithubEdit w-1/5 bg-white'>
                <hr className='d-block lg:hidden' />
                <div className='top-0 top-1 border-l pl-4 py-16 sticky'>
                  <div className='edit-button'>
                    <EditDoc className='items-end btn edit-button-styles flex inline-flex items-center' />
                  </div>
                  {contextualLinks}
                  <div className='float-cta rounded'>
                    <h3 className='cta-title font-semibold'>
                      See how you can release 10x faster.
                    </h3>
                    <a
                      href='/request-demo'
                      target='_blank'
                      className='signup-btn border border-primary_teal_green px-4 py-1.5 base-teal-gradient font-bold text-white rounded'
                    >
                      Book a free demo
                    </a>
                  </div>
                </div>
              </aside>
            </div>
            <div className='pagination_buttons'>
              <div
                className={
                  prev
                    ? 'navigation-block flex justify-between'
                    : 'navigation-block overflow-hidden'
                }
              >
                {prev && (
                  <div className='prev_button'>
                    <Link to={prev.url}>
                      <span>Previous</span>
                      <svg
                        stroke=''
                        fill='#78757a'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='css-1hyj6ne'
                        height='1.6em'
                        width='1.6em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'></path>
                      </svg>
                      <h3 className='perviousLink'>{prev.title}</h3>
                    </Link>
                  </div>
                )}
                {next && (
                  <div className='next_button'>
                    <Link to={next.url}>
                      <span>Next</span>
                      <svg
                        stroke=''
                        fill='#78757a'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='css-jmo9lw'
                        height='1.6em'
                        width='1.6em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'></path>
                      </svg>
                      <h3 className='next_link'>{next.title}</h3>
                    </Link>
                  </div>
                )}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        page_title
        metadesc
        canonical
        keywords
        social_share_summary
        social_share_desc
        social_share_image
        noindex
        contextual_links {
          type
          name
          url
        }
      }
      fields {
        slug
      }
    }
  }
`;
/* eslint-enaable */
