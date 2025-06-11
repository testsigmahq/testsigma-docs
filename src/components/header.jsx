import React, { useEffect, useState } from 'react';
import SearchInputBox from './SearchInputBox';
import tsLogo from '../components/images/testsigma-logo-v3-dark.svg';

const Header = () => {
  const [isHomepage, setIsHomepage] = useState(false);
  const [pathChecks, setPathChecks] = useState({
    isAttoDocs: false,
    isTestManagementDocs: false,
    isDesktopDocs: false,
    isSalesforceDocs: false,
    isCopilotDocs: false,
  });

  useEffect(() => {
    const pathname = window.location.pathname;
    setIsHomepage(pathname === '/docs/');
    setPathChecks({
      isAttoDocs: pathname.includes('/atto/'),
      isTestManagementDocs: pathname.includes('/test-management/'),
      isDesktopDocs: pathname.includes('/windows-automation/'),
      isSalesforceDocs: pathname.includes('/salesforce-testing/'),
      isCopilotDocs: pathname.includes('/genai-capabilities/'),
    });
  }, []);

  const {
    isAttoDocs,
    isTestManagementDocs,
    isDesktopDocs,
    isSalesforceDocs,
    isCopilotDocs,
  } = pathChecks;

  return (
    <header id='root_header' className='header-block flex items-stretch'>
      <div className='container flex'>
        <a href={'/'} className='logo-block flex max-w-sm w-1/6'>
          <img src={tsLogo} alt='Testsigma' className='ml-10 my-6' />
        </a>
        <div className='primary-nav flex-auto flex items-center'>
          <div className='search-block relative flex items-center justify-between w-2/5 pr-3 gap-2'>
            <div className='search-block-child'>
              <SearchInputBox></SearchInputBox>
            </div>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 text-secondary_teal_green rounded'
              href='/request-demo'
            >
              BOOK A DEMO
            </a>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 base-teal-gradient text-white rounded'
              href='/signup'
            >
              GET STARTED FREE
            </a>
          </div>
          <nav className='flex w-11/12 gap-4'>
            <a
              className={`btn btn-ghost btn-sm rounded-btn border-b-2 hover:border-primary_teal_green ${
                !isAttoDocs &&
                !isTestManagementDocs &&
                !isDesktopDocs &&
                !isSalesforceDocs &&
                !isCopilotDocs
                  ? 'border-primary_teal_green'
                  : 'border-white'
              }`}
              href='/docs/getting-started/introduction-cloud/'
            >
              Test Automation
            </a>
            <a
              className={`btn btn-ghost btn-sm rounded-btn border-b-2 hover:border-primary_teal_green ${
                isAttoDocs ? 'border-primary_teal_green' : 'border-white'
              }`}
              href='/docs/test-management/atto/overview/'
            >
              Atto (Beta)
            </a>
            <a
              className={`btn btn-ghost btn-sm rounded-btn border-b-2 hover:border-primary_teal_green ${
                isTestManagementDocs && !isAttoDocs
                  ? 'border-primary_teal_green'
                  : 'border-white'
              }`}
              href='/docs/test-management/'
            >
              Test Management
            </a>
            <a
              className={`btn btn-ghost btn-sm rounded-btn border-b-2 hover:border-primary_teal_green ${
                isSalesforceDocs ? 'border-primary_teal_green' : 'border-white'
              }`}
              href='/docs/salesforce-testing/introduction/'
            >
              Salesforce
            </a>
            <a
              className={`btn btn-ghost btn-sm rounded-btn border-b-2 hover:border-primary_teal_green ${
                isDesktopDocs ? 'border-primary_teal_green' : 'border-white'
              }`}
              href='/docs/windows-automation/introduction/'
            >
              Desktop
            </a>
            <a
              className={`btn btn-ghost btn-sm rounded-btn border-b-2 hover:border-primary_teal_green ${
                isCopilotDocs ? 'border-primary_teal_green' : 'border-white'
              }`}
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
