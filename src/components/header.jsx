import React, { useEffect, useState } from 'react';
import SearchInputBox from './SearchInputBox';
import tsLogo from '../components/images/testsigma-logo-v3-dark.svg';

const Header = () => {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(window.location.pathname === '/docs/');
  }, []);

  return (
    <header id='root_header' className='header-block flex items-stretch'>
      <div className='container flex'>
        <a href={'/'} className='logo-block flex max-w-sm w-1/6'>
          <img src={tsLogo} alt='Testsigma' className='ml-10 my-6' />
        </a>
        <div className='primary-nav flex-auto flex items-center'>
          <div className='search-block relative flex items-center justify-between w-2/5 pr-9 gap-4'>
            <div className='search-block-child'>
              <SearchInputBox></SearchInputBox>
            </div>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 text-secondary_teal_green rounded'
              href='/signup'
            >
              GET STARTED FREE
            </a>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 base-teal-gradient text-white rounded'
              href='/request-demo'
            >
              BOOK A DEMO
            </a>
          </div>
          <nav className='flex w-11/12 gap-7'>
            <a
              className='btn btn-ghost btn-sm rounded-btn border-b-2 border-white hover:border-primary_teal_green'
              href='/docs/getting-started/introduction-cloud/'
            >
              Test Automation
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn border-b-2 border-white hover:border-primary_teal_green'
              href='/docs/test-management/atto/overview/'
            >
              Atto (Beta)
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn border-b-2 border-white hover:border-primary_teal_green'
              href='/docs/test-management/'
            >
              Test Management
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn border-b-2 border-white hover:border-primary_teal_green'
              href='/docs/salesforce-testing/introduction/'
            >
              Salesforce
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn border-b-2 border-white hover:border-primary_teal_green'
              href='/docs/desktop-testing/introduction/'
            >
              Desktop
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn border-b-2 border-white hover:border-primary_teal_green'
              href='/docs/genai-capabilities/copilot/'
            >
              Testsigma Copilot
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
