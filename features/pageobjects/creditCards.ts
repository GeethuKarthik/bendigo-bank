class CreditCardSelectionPage {

  public applyForCreditCard() {
    const elem =  $('[aria-label="Apply now for a bendigo bright credit card"]');
    expect(elem).toBePresent();  
    return elem.click();
  }
}

export default new CreditCardSelectionPage();