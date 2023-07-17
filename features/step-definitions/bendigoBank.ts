import { Given, When, Then } from '@wdio/cucumber-framework';
import BendigoHomePage from '../pageobjects/bendigo';
import CreditCardSelectionPage from '../pageobjects/creditCards';

Given(/^I am on the bendigo bank home page$/, async () => {
    await BendigoHomePage.openHomePage();
});

When(/^User select Banking menu$/, async () => {
    await BendigoHomePage.selectBanking();
});

Then(/^Choose Credit Card option$/, async () => {
    await BendigoHomePage.chooseCreditCard();
});

Then(/^Apply for Bendigo Bright credit card$/, async () => {
    await CreditCardSelectionPage.applyForCreditCard();
});
