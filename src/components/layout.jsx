/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useRef} from 'react';
import './layout.scss';

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts
            .pop()
            .split(';')
            .shift();
    }
    return undefined;
};

const setReferrerCookie = () => {
    const referrerUrl = document.referrer !== '' ? document.referrer : 'null';
    const now = new Date();
    const timeStamp = now.setDate(now.getDate() + 30);
    const expiration = new Date(timeStamp).toUTCString();
    const currentCookie = getCookie('referrer_url');
    if (!referrerUrl.split('?')[0].includes('testsigma.com')) {
        if (
            referrerUrl !== ''
            || currentCookie === 'null'
            || currentCookie === undefined
        ) {
            document.cookie = 'referrer_url=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure';
            document.cookie = `referrer_url=${referrerUrl};expires=${expiration};path=/;secure;`;
        }
    }
};

class Layout extends React.Component {
    observer = null;
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    componentDidMount() {
        setReferrerCookie();
        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const navElement = document.querySelector(
                    `.contextual-links a.dynamic-link__internal[href*="#${entry.target.id}"]`,
                )
                if (entry.isIntersecting) {
                    if (navElement && !navElement.classList.contains('border-red-100')) {
                        document.querySelectorAll('.contextual-links__link a.border-red-100.border-b-2').forEach(previousActive => {
                            previousActive.classList.remove('border-b-2', 'border-red-100');
                        })
                        navElement.classList.add('border-b-2', 'border-red-100');
                    }
                }
            })
        }, {
            threshold: 0.5,
        });

        const contextualLinks = document.querySelectorAll('h2');
        contextualLinks.forEach(headerWithId => {
          this.observer.observe(headerWithId);
        });
    }

    componentWillUnmount() {
        this.observer.disconnect()
        this.observer = null
    }

    render() {
        const { children } = this.state;
        return (
            <>
                <main>
                    {children}
                </main>
            </>
        );
    }
}

export default Layout;
