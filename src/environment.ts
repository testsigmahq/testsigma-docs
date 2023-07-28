export const environment =  {
    hostname: "localhost",
    isStaging() {
        return this.hostname == "website.testsigma.com";
    }
}