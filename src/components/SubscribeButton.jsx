import React, { useEffect, useRef } from 'react';

const SubscribeButton = () => {
    const formRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt && window.hbspt.forms) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "23341221",
                    formId: "87576ba1-bb40-433e-9257-4af82e747a6e",
                    target: "#hubspot-form-wrapper",
                });
            }
        });

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="footer_greenbox">
            <div className="flex_item">
                <h4 className="green_text">
                    Stay up to date with product updates & news
                </h4>
            </div>
            <div className="flex_item" id="hubspot-form-wrapper" />
        </div>
    );
};

export default SubscribeButton;
