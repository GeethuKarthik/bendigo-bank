class BendigoHomePage {

  public async openHomePage () {
    return await browser.url("https://www.bendigobank.com.au/");
  }
  public async selectBanking() {
    return await $("button[name='banking']").click();
  }
  public async chooseCreditCard() {
    return await $('=Credit cards').click();
  }
}

export default new BendigoHomePage();