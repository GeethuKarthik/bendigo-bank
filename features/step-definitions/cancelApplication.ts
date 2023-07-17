import { Given, When, Then } from '@wdio/cucumber-framework';
import CancelApplication from '../pageobjects/cancelApplication';


Given(/^I am on financial details section$/, async () => {
    await browser.url('https://applynow.bendigobank.com.au/apply/?_gl=1*1cmb4ow*_gcl_au*MTU4ODM5NTY0Ny4xNjg5MzE3MzM4*_ga*MjE5NjkwNDM2LjE2ODkzMTczMzg.*_ga_8G245KPFM1*MTY4OTU4MzgxOC44LjEuMTY4OTU4MzgzMy40NS4wLjA.#/apply/1832474/creditCards/financialDetails/liabilities?productCode=RCA-M1-BRT-BRT');
});

When(/^User cancel the application$/, async () => {
    await CancelApplication.cancelApplication()
});

Then(/^A flash message should appear$/, async () => {
    await CancelApplication.flashMessage();
});