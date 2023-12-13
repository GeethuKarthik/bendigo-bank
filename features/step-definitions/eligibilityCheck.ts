import { Given, When, Then } from '@wdio/cucumber-framework';
import CreditCardSelectionPage from '../pageobjects/creditCards';
import CheckMyEligibilityPage from '../pageobjects/checkMyEligibility';

// checking eligibility
Given(/^I am on check my eligibility page$/, async () => {
    await expect(browser).toHaveUrl('https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright');
});

When(/^User click on Continue to Apply button$/, async () => {
    await CreditCardSelectionPage.continueToApply();
});

Then(/^Getting started page appears, fill the details and click Continue button$/, async () => {
    await CheckMyEligibilityPage.setProductDetails();
    await CheckMyEligibilityPage.fillApplicationDetails();
    await CheckMyEligibilityPage.fillTimeAndeligibilityDetails();
    await CheckMyEligibilityPage.addBranchDetails();
    await CheckMyEligibilityPage.fillFinancialDetails();
    await CheckMyEligibilityPage.enterExpenseDetails();
});