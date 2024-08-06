import React from "react";
import * as url from "url";

import "./navcards.scss"

const data = [
    {
        id: 1,
        title: "Getting Started",
        description: "Learn how to start Automation Testing with Testsigma across all platforms.",
        path: "/docs/getting-started/introduction-cloud/",
    },
    {
        id: 2,
        title: "Projects & Settings",
        description: "Learn about Applications, Projects, and their Settings in Testsigma.",
        path: "/docs/projects/overview/",
    },
    {
        id: 3,
        title: "Collaboration",
        description: "Add team members to your project and assign different roles and accesses in Testsigma.",
        path: "/docs/collaboration/invite-team-members/",
    },
    {
        id: 4,
        title: "Test Cases",
        description: "Create and Manage Test Cases in Testsigma.",
        path: "/docs/test-cases/overview/",
    },
    {
        id: 5,
        title: "Test Data Management",
        description: "Manage data used in your Test Cases effectively.",
        path: "/docs/test-data/overview/",
    },
    {
        id: 6,
        title: "Elements(Objects)",
        description: "Learn how to locate, capture, record, and create elements. ",
        path: "/docs/elements/overview/",
    },
    {
        id: 7,
        title: "Test Step Recorder",
        description: "Record your test steps with the help of Testsigma Chrome extension.",
        path: "/docs/test-step-recorder/install-chrome-extension/",
    },
    {
        id: 8,
        title: "Test Management",
        description: "Learn how to create and manage Test Suites and Test Plans in Testsigma.",
        path: "/docs/test-management/test-suites/overview/",
    },
    {
        id: 9,
        title: "Test Runs/Executions",
        description: "Run Tests on Local Devices, Vendor Platforms, and Hosted Applications.",
        path: "/docs/runs/adhoc-runs/",
    },
    {
        id: 10,
        title: "Debugging",
        description: "Debug dry runs, test plans, and results on local devices.",
        path: "/docs/debugging/debugging-localdevices-web/",
    },
    {
        id: 11,
        title: "Testsigma Agent",
        description: "Run tests on your local machines/devices with Testsigma Agent.",
        path: "/docs/agent/overview/",
    },
    {
        id: 12,
        title: "Continuous Integration",
        description: "Integrate Testsigma with your CI/CD tool for continuous testing.",
        path: "/docs/continuous-integration/get-test-plan-details/",
    },
    {
        id: 13,
        title: "Reports & Analytics",
        description: "Understand the results of your test execution with test reports on all levels.",
        path: "/docs/reports/dashboard/",
    },
    {
        id: 14,
        title: "Visual Testing",
        description: "Perform Visual Testing for web and mobile applications.",
        path: "/docs/visual-testing/configure-test-steps/",
    },
    {
        id: 15,
        title: "Desired Capabilities",
        description: "List of Sample Desired Capabilities in Testsigma.",
        path: "/docs/desired-capabilities/overview/",
    },
    {
        id: 16,
        title: "Integrations",
        description: "Integrate Testsigma with Project Management Tools and Test Labs.",
        path: "/docs/integrations/overview/",
    },
    {
        id: 17,
        title: "Addons",
        description: "Install, Create, and Update addons to extend Testsigma's built-in repository of actions with custom actions.",
        path: "/docs/addons/what-is-an-addon/",
    },
    {
        id: 18,
        title: "Testsigma SDK",
        description: "Perform specific actions in Addons using Testsigma SDK.",
        path: "/docs/sdk/manage-runtime-test-data/",
    },
    {
        id: 19,
        title: "Configuration",
        description: "Configure 3rd party tools with Testsigma using an authentic connection.",
        path: "/docs/configuration/api-keys/",
    },
    {
        id: 20,
        title: "Uploads",
        description: "Learn how to upload files, applications, and mobile app builds in Testsigma.",
        path: "/docs/uploads/upload-files/",
    },
    {
        id: 21,
        title: "Testsigma REST APIs",
        description: "REST API Endpoints in Testsigma to manage the entities available in Testsigma.",
        path: "/docs/api/overview/",
    },
    {
        id: 22,
        title: "Contributing",
        description: "Contribute to Testsigma community.",
        path: "/docs/contributing/open-source-dev-environment-setup/macos-and-intellij-ce/",
    },
    {
        id: 23,
        title: "Troubleshooting",
        description: "Learn how to Troubleshoot some common issues while Testing.",
        path: "/docs/troubleshooting/NLPs/unable-to-retrieve-value/",
    },
    {
        id: 24,
        title: "FAQs",
        description: "FAQs about our Products and Services.",
        path: "/docs/FAQs/web-apps/why-chrome-extension/",
    },
    {
        id: 25,
        title: "On Premise Setup",
        description: "On Premise setup prerequisites, steps to install & more.",
        path: "/docs/on-premise-setup/installation-process/setup/",
    },
    {
        id: 26,
        title: "Salesforce Testing",
        description: "Learn how to test applications built on Salesforce using Testsigma.",
        path: "/docs/salesforce-testing/introduction/",
    },
    {
        id: 27,
        title: "Windows Automation",
        description: "Learn a comprehensive approach for Windows Automation using Testsigma.",
        path: "/docs/windows-automation/introduction/",
    },
    {
        id: 28,
        title: "Best Practices",
        description: "Best Practices to follow for Testsigma Automation",
        path: "/docs/best-practices/best-practices/",
    },
];

const Card = ({ title, description, path }) => {
    return (
        <a href={path} className="card md:w-5/12 p-7 cursor-pointer justify-between flex w-full ">
            <div className="w-fit">
                <span className="card_heading">{title}</span><br/>
                <span className="card_desc">{description}</span>
            </div>
            <div className="w-fit content-center grid">
                <div className="block p-4 right-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.246093 6.98633C0.246093 6.75904 0.334979 6.54106 0.493195 6.38035C0.651411 6.21963 0.865998 6.12934 1.08975 6.12934L11.8643 6.12934L8.24169 2.45115C8.16325 2.37147 8.10103 2.27688 8.05857 2.17277C8.01612 2.06866 7.99427 1.95708 7.99427 1.8444C7.99427 1.73172 8.01612 1.62013 8.05857 1.51603C8.10103 1.41192 8.16325 1.31733 8.24169 1.23765C8.32013 1.15797 8.41325 1.09477 8.51573 1.05164C8.61822 1.00852 8.72806 0.986329 8.83899 0.986329C8.94992 0.986329 9.05977 1.00852 9.16226 1.05164C9.26474 1.09477 9.35786 1.15797 9.4363 1.23765L14.4982 6.37958C14.5768 6.45919 14.6391 6.55376 14.6817 6.65787C14.7242 6.76199 14.7461 6.8736 14.7461 6.98633C14.7461 7.09905 14.7242 7.21067 14.6817 7.31478C14.6391 7.4189 14.5768 7.51347 14.4982 7.59308L9.4363 12.735C9.35786 12.8147 9.26474 12.8779 9.16226 12.921C9.05977 12.9641 8.94993 12.9863 8.83899 12.9863C8.72806 12.9863 8.61822 12.9641 8.51573 12.921C8.41325 12.8779 8.32013 12.8147 8.24169 12.735C8.08327 12.5741 7.99427 12.3558 7.99427 12.1283C7.99427 12.0156 8.01612 11.904 8.05857 11.7999C8.10103 11.6958 8.16325 11.6012 8.24169 11.5215L11.8643 7.84332L1.08975 7.84332C0.865998 7.84332 0.651411 7.75303 0.493195 7.59231C0.334979 7.43159 0.246093 7.21362 0.246093 6.98633Z" fill="#000000"/>
                    </svg>
                </div>
            </div>
        </a>
    );
};

const CardList = () => {
    return (
        <div className="w-full flex flex-wrap gap-2 justify-center">
            {data.map((item) => (
                <Card key={item.id} title={item.title} description={item.description} path={item.path}/>
            ))}
        </div>
    );
};

export default CardList;
