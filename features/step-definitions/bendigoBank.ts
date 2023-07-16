import { Given, When, Then } from '@wdio/cucumber-framework';

import BendigoHomePage from '../pageobjects/bendigo';

Given(/^I am on the bendigo bank home page$/, async () => {
    await BendigoHomePage.openHomePage()
});

