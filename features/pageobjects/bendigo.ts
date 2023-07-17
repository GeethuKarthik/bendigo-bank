class BendigoHomePage {

  public async openHomePage () {
    return  browser.url("https://www.bendigobank.com.au/");
  }
  public async selectBanking() {
    return $("button[name='banking']").click();
  }
  public async chooseCreditCard() {
    return $('=Credit cards').click();
  }
}

export default new BendigoHomePage();