class CreditCardSelectionPage {

  public async applyForCreditCard() {
    await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/");
    await browser.$("//*[@id=\"Button-232952\"]").scrollIntoView();
    return await browser.$("//*[@id=\"Button-232952\"]").click();
  }

  public async continueToApply() {
    await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright")
    return await browser.$("//*[@id=\"Button-237631\"]").click();
  }
}

export default new CreditCardSelectionPage();