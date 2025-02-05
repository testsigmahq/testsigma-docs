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
          <div className='search-block relative flex items-center justify-between w-2/5 pl-9 pr-9 gap-4'>
            <div className='search-block-child'>
              <SearchInputBox></SearchInputBox>
            </div>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 text-primary_teal_green rounded'
              href='/signup'
            >
              GET STARTED FREE
            </a>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 bg-primary_teal_green text-white rounded'
              href='/request-demo'
            >
              BOOK A DEMO
            </a>
          </div>
          <nav className='flex w-4/5'>
            {isHomepage ? (
              <span className='border-b-2 border-primary_teal_green btn btn-ghost btn-sm pr-2 rounded-btn text-primary_teal_green'>
                Docs
              </span>
            ) : (
              <a
                className='border-b-2 border-primary_teal_green btn btn-ghost btn-sm pr-2 rounded-btn text-primary_teal_green'
                href='/docs/'
              >
                Docs
              </a>
            )}
            <a
              className='btn btn-ghost btn-sm rounded-btn ml-10'
              href={'/tutorials/'}
            >
              Tutorials
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn ml-10'
              target={'_blank'}
              href={'https://github.com/Testsigmahq/testsigma/'}
            >
              GitHub
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn ml-10'
              href={'https://discord.com/invite/5caWS7R6QX'}
            >
              Discord
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn ml-10'
              href={'https://testsigma.com/pricing'}
            >
              Enterprise
            </a>
            <a
              className='btn btn-ghost btn-sm rounded-btn ml-10'
              href={'https://testsigma.com/'}
            >
              Testsigma Cloud
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
