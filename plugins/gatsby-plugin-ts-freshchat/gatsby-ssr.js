const React = require("react")

module.exports.onRenderBody = (
    {setPostBodyComponents},
    pluginOptions
) => {
    if (typeof pluginOptions.token === `undefined`) {
        return null
    }

    const freshchatHost = pluginOptions.host ? pluginOptions.host : `https://wchat.freshchat.com`

    const appEmbedUrl =
        pluginOptions.appEmbedUrl ? pluginOptions.appEmbedUrl : `https://app.testsigma.com/ui/dashboard`

    const renderHTML = () => `
    window.fcSettings = {
      token: "${pluginOptions.token}",
      host: "${freshchatHost}"
    };

    function addFreshchatScript() {
        if (window.fcWidgetAdded) return;
        var fcScript = document.createElement('script');
        fcScript.setAttribute('src','https://wchat.freshchat.com/js/widget.js');
        fcScript.setAttribute('async', 'async');
        document.body.appendChild(fcScript);
        window.fcWidgetAdded = true;
    }
    
    function changeSignupBtn() {
        var signupBtn = document.getElementById('signup-btn');
        if (!signupBtn) {
            setTimeout(changeSignupBtn, 1000);
            return;
        }
        document.getElementById('signup-btn').textContent = 'Go to Dashboard';
        document.getElementById('signup-btn').href = 'https://app.testsigma.com';
    }
    
    // If session details is not received from app within 15 seconds, create new chat.
    setTimeout(addFreshchatScript, 15000);

    window.addEventListener('message', function( event) {
        if (event.origin === 'https://app.testsigma.com' ||
            event.origin === 'https://staging.testsigma.com' ||
            event.origin === 'https://prestaging.testsigma.com' ||
            event.origin === 'https://devtesting.testsigma.com' ||
            event.origin === 'http://dev.testsigma.com') {
            if (event.data === 'appLoggedOut') {
                addFreshchatScript();
            } else {
                var session = JSON.parse(event.data);
                changeSignupBtn();
                window.fcSettings.externalId = session.user.email;
                window.fcSettings.restoreId = session.fcRestoreId;
                addFreshchatScript();
            }
        }
    });
  `

    setPostBodyComponents([
        <iframe key={`gatsby-plugin-ts-freshchat-iframe`} 
                src={`${appEmbedUrl}`} 
                height={0} width={0} 
                style={{display: "none"}}></iframe>,
        <script
            key={`gatsby-plugin-ts-freshchat-render`}
            dangerouslySetInnerHTML={{__html: renderHTML()}}
        />
    ])
}