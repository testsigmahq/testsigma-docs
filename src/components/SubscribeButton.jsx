import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

class SubscribeButton extends Component {
    constructor(props) {
        super(props);
        this._reCaptchaRef = React.createRef();
    }

    subscribeNewsletters = async (e) => {
        e.preventDefault();
        const CONTACT_LIST_API = 'https://staging.testsigma.com/api/website/contacts';
        const email =  document.getElementById('email').value;
        const emailError = document.getElementById('email_error');
        const subscribeSuccess = document.getElementById('subscribe_success');
        let trimmedURL = window.location.href;

        if (trimmedURL.length > 250)
            trimmedURL = window.location.href.substr(0, 240)+"...";

        const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        this._reCaptchaRef.current.executeAsync().then(value => {

            const formData = {
                'CATEGORY': 'Product Updates',
                'LSOURCE': 'Tutorials',
                'UPDATES': '',
                'URL': trimmedURL,
                'add_tags_immediately': false,
                'email': email,
                'g-recaptcha-response': value,
                'list_id' : 'bec00ef235',
                'tags': ['Product Updates']
            };

            emailError.style.display = "none";
            subscribeSuccess.style.display = "none";

            if (!regex.test(email)) {
                emailError.style.display = "block";
                return false;
            } else {
              axios({
                  method: 'POST',
                  url: CONTACT_LIST_API,
                  data: formData,
                  headers: { "Content-Type": "application/json; charset=UTF-8" },
                })
                .then(function (response) {
                    // handle success
                    document.getElementById('email').value = "";
                    subscribeSuccess.style.display = "block";
                    setTimeout(() => {
                        subscribeSuccess.style.display = "none";
                    }, 3000);
                    // console.log("Success: ", response);
                })
                .catch(function (response) {
                    // handle error
                    document.getElementById('email').value = "";
                    subscribeSuccess.style.display = "block";
                    setTimeout(() => {
                        subscribeSuccess.style.display = "none";
                    }, 3000);
                    console.error("Failed: ", response);
                });
            }
        });
    }

    render() {
        return (
            <div className="footer_greenbox">
            <div className="flex_item">
                <h4 className="green_text">
                    Stay up to date with product updates & news
                </h4>
            </div>
            <div className="flex_item">
                <form>
                    <svg width="20" height="15" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.75 10.4829H1.41667C1.04094 10.4829 0.680609 10.3449 0.414933 10.0991C0.149256 9.85337 0 9.52008 0 9.17255V1.25336C0.0158898 0.915807 0.172132 0.596975 0.436106 0.36343C0.70008 0.129885 1.05138 -0.00031923 1.41667 5.87777e-07H12.75C13.1257 5.87777e-07 13.4861 0.138056 13.7518 0.383797C14.0174 0.629538 14.1667 0.962834 14.1667 1.31036V9.17255C14.1667 9.52008 14.0174 9.85337 13.7518 10.0991C13.4861 10.3449 13.1257 10.4829 12.75 10.4829ZM1.41667 2.53424V9.17255H12.75V2.53424L7.08334 6.02767L1.41667 2.53424ZM1.98334 1.31036L7.08334 4.45524L12.1834 1.31036H1.98334Z"
                            fill="#CACACA"/>
                    </svg>
                    <input type="text" id="email" name="email" placeholder="Your Email Id"/>
                </form>
                <p id="email_error" className="email-error">Please fill out this field.</p>
                <p id="subscribe_success" className="subscribe-success">You're now subscribed to our monthly product updates.</p>
            </div>
            <div className="flex_item btn_width">
                <ReCAPTCHA
                    size="invisible"
                    ref={this._reCaptchaRef}
                    sitekey='6LcL08cZAAAAAAn21PBn75R1qLquLlbx1ZB0ZIFd'
                />
                <button className="btn" onClick={this.subscribeNewsletters}>Subscribe</button>
            </div>
        </div>
        );
    }
}

export default SubscribeButton;