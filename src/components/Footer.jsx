import React, { Component } from 'react';
import FeedbackButtons from './FeedbackButtons';
import SubscribeButton from './SubscribeButton';
import './Footer.scss';
import { useLocation } from '@reach/router';
import tsLogo from '../components/images/testsigma-logo-v3-dark.svg';

const Footer = () => {
  const { pathname } = useLocation();
  const pathRoute = pathname.slice(0, -1);
  return (
    <>
      <FeedbackButtons />
      {/* <SubscribeButton /> */}
      <div className='footer-cta rounded'>
        <div className='flex items-center justify-between flex-wrap'>
          <h3 className='cta-heading m-0'>
            Learn how to execute low code tests across 3000+ device / browser
            environments.
          </h3>
          <a
            href='/request-demo'
            target={'_blank'}
            className='cta-link border border-primary_teal_green base-teal-gradient px-4 py-1.5 text-white rounded h-10'
          >
            Schedule a free demo
          </a>
        </div>
      </div>
      <div className='footer_greyBox'>
        <img src={tsLogo} alt='Testsigma' />
        <p>Want to contribute or report missing content?</p>
        <div className='p_flex'>
          <p className='right_border'>
            <a
              href={`https://github.com/testsigmahq/testsigma-docs/blob/dev/src/pages${pathRoute}.md`}
              target='_blank'
            >
              edit this page on github{' '}
            </a>
          </p>
          <p className='right_border'>
            <a
              href='https://github.com/testsigmahq/testsigma-docs/blob/dev/CONTRIBUTING.md'
              target='_blank'
            >
              contributing guidelines{' '}
            </a>
          </p>
          <p>
            <a
              href='https://github.com/testsigmahq/testsigma-docs/issues/new/choose'
              target='_blank'
            >
              report an issue
            </a>
          </p>
        </div>
        <p className='p_0'>
          <a href='https://github.com/testsigmahq/testsigma' target='_blank'>
            {' '}
            Testsigma{' '}
          </a>{' '}
          is open source.{' '}
          <a
            href='https://github.com/testsigmahq/testsigma/blob/main/LICENSE'
            className='link_underline'
            target='_blank'
          >
            See license
          </a>
        </p>
      </div>
      <div className='footer_text'>
        <div className='flex_item'>
          <p>
            <a href='https://testsigma.com/' target='_blank'>
              {' '}
              www.testsigma.com{' '}
            </a>
          </p>
        </div>
        <div className='flex_item'>
          <p className='text_end'>
            ©2023 Copyright , Testsigma Technologies Inc
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
