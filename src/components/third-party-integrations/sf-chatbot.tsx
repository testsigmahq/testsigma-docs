import React, { useEffect } from 'react';

declare global {
  interface Window {
    embeddedservice_bootstrap?: {
      settings: {
        language: string;
        hideChatButtonOnLoad: boolean;
      };
      init: (
        orgId: string,
        configName: string,
        siteUrl: string,
        settings: {
          scrt2URL: string;
        },
      ) => void;
      utilAPI?: {
        launchChat: () => void;
        hideChatButton: () => void;
        showChatButton: () => void;
      };
    };
  }
}

const SALESFORCE_ORG_ID = '00D2v000000SgBD';
const SALESFORCE_CONFIG_NAME = 'Main';
const SALESFORCE_SITE_URL =
  'https://d2v000000sgbdea0.my.site.com/ESWMain1754927836109';
const SALESFORCE_SCR2_URL = 'https://d2v000000sgbdea0.my.salesforce-scrt.com';

const initEmbeddedMessaging = () => {
  try {
    if (window.embeddedservice_bootstrap) {
      window.embeddedservice_bootstrap.settings.language = 'en_US';
      window.embeddedservice_bootstrap.settings.hideChatButtonOnLoad = false;

      window.embeddedservice_bootstrap.init(
        SALESFORCE_ORG_ID, // Salesforce Org ID
        SALESFORCE_CONFIG_NAME, // Embedded Service Config Name
        SALESFORCE_SITE_URL,
        {
          scrt2URL: SALESFORCE_SCR2_URL,
        },
      );
    }
  } catch (err) {
    console.error('Error loading Embedded Messaging: ', err);
  }
};

const startBot = () => {
  try {
    const script = document.createElement('script');
    script.src = `${SALESFORCE_SITE_URL}/assets/js/bootstrap.min.js`;
    script.defer = true;
    script.onload = initEmbeddedMessaging;
    script.onerror = () => {
      console.error('Failed to load Salesforce script');
    };
    document.body.appendChild(script);
  } catch (error) {
    console.error('Error creating Salesforce script:', error);
  }
};

export const showChatbot = () => {
  if (window.embeddedservice_bootstrap?.utilAPI?.launchChat) {
    window.embeddedservice_bootstrap.utilAPI.launchChat();
  }
};

// const hideChatbot = () => {
//   if (window.embeddedservice_bootstrap?.utilAPI?.hideChatButton) {
//     window.embeddedservice_bootstrap.utilAPI.hideChatButton();
//   }
// };

const SalesforceChatbot: React.FC = () => {
  useEffect(() => {
    startBot();

    // Cleanup function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src*="ESWMain1754927836109"]',
      );
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default SalesforceChatbot;
