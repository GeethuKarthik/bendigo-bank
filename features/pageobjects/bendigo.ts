class BendigoHomePage {

    public openHomePage () {
        return  browser.url("https://www.bendigobank.com.au/");
    }
}

export default new BendigoHomePage();