/* eslint-disable react/no-danger */
import React, { useEffect }  from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from "../../components/seo";
import SearchInputBox from "../../components/SearchInputBox";
import MobileView from "../../components/MobileView";
import LeftNav from "../../components/LeftNav";

import 'prismjs/themes/prism-tomorrow.css';
import '../../templates/page.scss';
import CardList from "../../components/navcards";
import Header from "../../components/header";

const IndexContent = () => {
    return (
        <>
            <div className="w-full md:px-16 home-page_banner">
                <h1 className="text-4xl font-bold">Testsigma's Documentation Support</h1><br/>
                <span className="text-base font-normal">SETUP | WRITE | RUN | MAINTAIN | INTEGRATE | EXTEND</span>
            </div>
            <div className="w-full">
                <span className="text-2xl">Knowledge Base</span>
                <hr/>
            </div>
            <div className="w-full pt-8 card_container">
                <CardList />
            </div>
            <div className='footer-cta rounded'>
                <div className='flex items-center justify-evenly'>
                    <h3 className='cta-heading m-0'>Learn how to execute low code tests across 3000+ device / browser environments.</h3>
                    <a href='/request-demo' target={'_blank'} className='cta-link border border-green-600 px-4 py-1.5 bg-green-600 text-white rounded h-10'>Schedule a free demo</a>
                </div>
            </div>
            <div className="flex flex-wrap homepage_footer">
                <div className="flex flex-wrap">
                    <button onClick={() => window.fcWidget.open()}>
                        <div className="flex items-center chat_btn">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.95834 9.22632H8.22605C8.42674 9.22632 8.59202 9.15832 8.72188 9.02232C8.85174 8.88679 8.91667 8.71868 8.91667 8.51798C8.91667 8.31729 8.84891 8.14894 8.71338 8.01294C8.57738 7.87742 8.40903 7.80965 8.20834 7.80965H3.94063C3.73994 7.80965 3.57466 7.87742 3.4448 8.01294C3.31494 8.14894 3.25001 8.31729 3.25001 8.51798C3.25001 8.71868 3.31777 8.88679 3.4533 9.02232C3.5893 9.15832 3.75764 9.22632 3.95834 9.22632ZM3.95834 7.10132H11.0594C11.2601 7.10132 11.4254 7.03332 11.5552 6.89732C11.6851 6.76179 11.75 6.59368 11.75 6.39298C11.75 6.19229 11.682 6.02394 11.546 5.88794C11.4105 5.75242 11.2424 5.68465 11.0417 5.68465H3.94063C3.73994 5.68465 3.57466 5.75242 3.4448 5.88794C3.31494 6.02394 3.25001 6.19229 3.25001 6.39298C3.25001 6.59368 3.31777 6.76179 3.4533 6.89732C3.5893 7.03332 3.75764 7.10132 3.95834 7.10132ZM3.95834 4.97632H11.0594C11.2601 4.97632 11.4254 4.90855 11.5552 4.77303C11.6851 4.63703 11.75 4.46868 11.75 4.26798C11.75 4.06729 11.682 3.89894 11.546 3.76294C11.4105 3.62742 11.2424 3.55965 11.0417 3.55965H3.94063C3.73994 3.55965 3.57466 3.62742 3.4448 3.76294C3.31494 3.89894 3.25001 4.06729 3.25001 4.26798C3.25001 4.46868 3.31777 4.63703 3.4533 4.77303C3.5893 4.90855 3.75764 4.97632 3.95834 4.97632ZM0.416672 13.1753V2.14298C0.416672 1.7534 0.555505 1.41978 0.833172 1.14211C1.11037 0.864915 1.44376 0.726318 1.83334 0.726318H13.1667C13.5563 0.726318 13.8899 0.864915 14.1675 1.14211C14.4447 1.41978 14.5833 1.7534 14.5833 2.14298V10.643C14.5833 11.0326 14.4447 11.3662 14.1675 11.6439C13.8899 11.9211 13.5563 12.0597 13.1667 12.0597H3.25001L1.62084 13.6888C1.39653 13.9131 1.13964 13.9632 0.850172 13.839C0.561172 13.7153 0.416672 13.494 0.416672 13.1753ZM1.83334 11.4753L2.66563 10.643H13.1667V2.14298H1.83334V11.4753Z" fill="white"/>
                            </svg>
                            <span>Chat with US</span>
                        </div>
                    </button>
                    <Link to={"/community"}>
                        <div className="flex items-center community_btn">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.44617 8.9639C10.1304 8.9639 10.6858 9.51923 10.6858 10.2035L10.685 10.8849C10.7679 12.4361 9.61475 13.2203 7.54571 13.2203C5.48446 13.2203 4.31075 12.4482 4.31075 10.9118V10.2035C4.31075 9.51923 4.86608 8.9639 5.55033 8.9639H9.44617ZM9.44617 10.0264H5.55033C5.50337 10.0264 5.45833 10.0451 5.42512 10.0783C5.39191 10.1115 5.37325 10.1565 5.37325 10.2035V10.9118C5.37325 11.7448 6.00154 12.1578 7.54571 12.1578C9.08138 12.1578 9.66717 11.7583 9.62325 10.9132V10.2035C9.62325 10.1565 9.60459 10.1115 9.57138 10.0783C9.53817 10.0451 9.49313 10.0264 9.44617 10.0264ZM1.6545 5.42223H4.75417C4.66492 5.76898 4.64209 6.12949 4.68688 6.48473H1.6545C1.60754 6.48473 1.56249 6.50339 1.52928 6.5366C1.49607 6.56981 1.47742 6.61485 1.47742 6.66181V7.37015C1.47742 8.20315 2.10571 8.61611 3.64988 8.61611C3.97713 8.61611 4.26117 8.59769 4.50483 8.56156C4.09955 8.81833 3.80359 9.21596 3.67396 9.6779L3.64988 9.67861C1.58863 9.67861 0.414917 8.90652 0.414917 7.37015V6.66181C0.414917 5.97756 0.97025 5.42223 1.6545 5.42223ZM13.342 5.42223C14.0263 5.42223 14.5816 5.97756 14.5816 6.66181L14.5809 7.34323C14.6638 8.89448 13.5106 9.67861 11.4415 9.67861L11.3218 9.67719C11.1883 9.20263 10.88 8.79621 10.4591 8.53961C10.7332 8.59061 11.059 8.61611 11.4415 8.61611C12.9772 8.61611 13.563 8.21661 13.5191 7.37156V6.66181C13.5191 6.61485 13.5004 6.56981 13.4672 6.5366C13.434 6.50339 13.389 6.48473 13.342 6.48473H10.3103C10.3542 6.12942 10.3311 5.76905 10.2423 5.42223H13.342ZM7.49825 4.00556C7.77731 4.00556 8.05364 4.06053 8.31145 4.16732C8.56927 4.27411 8.80353 4.43064 9.00085 4.62796C9.19818 4.82529 9.3547 5.05955 9.4615 5.31736C9.56829 5.57518 9.62325 5.85151 9.62325 6.13056C9.62325 6.40962 9.56829 6.68595 9.4615 6.94377C9.3547 7.20158 9.19818 7.43584 9.00085 7.63317C8.80353 7.83049 8.56927 7.98702 8.31145 8.09381C8.05364 8.2006 7.77731 8.25556 7.49825 8.25556C6.93467 8.25556 6.39416 8.03168 5.99565 7.63317C5.59713 7.23465 5.37325 6.69415 5.37325 6.13056C5.37325 5.56698 5.59713 5.02648 5.99565 4.62796C6.39416 4.22945 6.93467 4.00556 7.49825 4.00556ZM7.49825 5.06806C7.35872 5.06806 7.22056 5.09555 7.09165 5.14894C6.96274 5.20234 6.84561 5.2806 6.74695 5.37926C6.64829 5.47793 6.57002 5.59505 6.51663 5.72396C6.46323 5.85287 6.43575 5.99103 6.43575 6.13056C6.43575 6.27009 6.46323 6.40826 6.51663 6.53717C6.57002 6.66607 6.64829 6.7832 6.74695 6.88187C6.84561 6.98053 6.96274 7.05879 7.09165 7.11219C7.22056 7.16558 7.35872 7.19306 7.49825 7.19306C7.78004 7.19306 8.05029 7.08112 8.24955 6.88187C8.44881 6.68261 8.56075 6.41236 8.56075 6.13056C8.56075 5.84877 8.44881 5.57852 8.24955 5.37926C8.05029 5.18001 7.78004 5.06806 7.49825 5.06806ZM3.60242 0.463898C4.166 0.463898 4.7065 0.687781 5.10502 1.0863C5.50353 1.48481 5.72742 2.02531 5.72742 2.5889C5.72742 3.15248 5.50353 3.69299 5.10502 4.0915C4.7065 4.49001 4.166 4.7139 3.60242 4.7139C3.03883 4.7139 2.49833 4.49001 2.09982 4.0915C1.7013 3.69299 1.47742 3.15248 1.47742 2.5889C1.47742 2.02531 1.7013 1.48481 2.09982 1.0863C2.49833 0.687781 3.03883 0.463898 3.60242 0.463898ZM11.3941 0.463898C11.9577 0.463898 12.4982 0.687781 12.8967 1.0863C13.2952 1.48481 13.5191 2.02531 13.5191 2.5889C13.5191 3.15248 13.2952 3.69299 12.8967 4.0915C12.4982 4.49001 11.9577 4.7139 11.3941 4.7139C10.8305 4.7139 10.29 4.49001 9.89148 4.0915C9.49297 3.69299 9.26908 3.15248 9.26908 2.5889C9.26908 2.02531 9.49297 1.48481 9.89148 1.0863C10.29 0.687781 10.8305 0.463898 11.3941 0.463898ZM3.60242 1.5264C3.32062 1.5264 3.05037 1.63834 2.85112 1.8376C2.65186 2.03685 2.53992 2.30711 2.53992 2.5889C2.53992 2.87069 2.65186 3.14094 2.85112 3.3402C3.05037 3.53946 3.32062 3.6514 3.60242 3.6514C3.88421 3.6514 4.15446 3.53946 4.35372 3.3402C4.55298 3.14094 4.66492 2.87069 4.66492 2.5889C4.66492 2.30711 4.55298 2.03685 4.35372 1.8376C4.15446 1.63834 3.88421 1.5264 3.60242 1.5264ZM11.3941 1.5264C11.1123 1.5264 10.842 1.63834 10.6428 1.8376C10.4435 2.03685 10.3316 2.30711 10.3316 2.5889C10.3316 2.87069 10.4435 3.14094 10.6428 3.3402C10.842 3.53946 11.1123 3.6514 11.3941 3.6514C11.6759 3.6514 11.9461 3.53946 12.1454 3.3402C12.3446 3.14094 12.4566 2.87069 12.4566 2.5889C12.4566 2.30711 12.3446 2.03685 12.1454 1.8376C11.9461 1.63834 11.6759 1.5264 11.3941 1.5264Z" fill="#183E46"/>
                            </svg>
                            <span>Ask the Community</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

const Index = () => {
    return (
        <Layout>
            <SEO
            title={`Testsigma Knowledge and  Documentation Support | Testsigma`}
            slug={`/docs/`}
            canonical={`/docs/`}
            metadesc={`Learn more about testsigma products and extend the platform from this documentation support and get answers to your common questions.`}
            keywords={`Testsigma Docs`}
            social_share_summary={`summary_large_image`}
            social_share_desc={`Learn more about testsigma products and extend the platform from this documentation support and get answers to your common questions.`}
            social_share_image={`http://localhost/testsigma-docs/src/components/images/bg-banner.svg`}
            />
            <Header />
            <hr/>
            <div className="w-full">
                <div className="flex items-stretch">
                    <MobileView></MobileView>
                    <nav className="isTablet w-1/4 max-w-sm bg-gray-50">
                        <LeftNav />
                    </nav>
                    <div className="flex-auto w-4/5">
                        <div className="flex items-stretch flex-wrap mx-8">
                            <IndexContent />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;