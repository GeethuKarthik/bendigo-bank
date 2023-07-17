class CheckMyEligibilityPage {

    public async setProductDetails() {
        await browser.$('#creditLimitAmountInput').click();
        await browser.$('#creditLimitAmountInput').setValue("10000");
        await $("button[name='creditCardUsage']").click();
        return await $("button[name='contBtn']").click();
    }

    public async fillApplicationDetails() {
        const relationStatus = await browser.$("//*[@name=\"maritalStatus\"]");
        await relationStatus.selectByIndex(1);
        await browser.$("//*[@name=\"isPrimaryApplicantExistingCustomer\"][contains(text(),'No')]").click();
        await browser.$("//*[@name=\"hasPromoCode\"][contains(text(),'No')]").click();
        await browser.$("button[name='contBtn']").scrollIntoView();
        return await $("button[name='contBtn']").click();
    }

    public async fillTimeAndeligibilityDetails() {
        await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
        await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").click()
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView();
        return await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click();
    }

    public async addBranchDetails() {
        await browser.$("//*[@placeholder=\"Enter a location\"]").setValue("Melbourne")
        await browser.$("//*[@id=\"branchSearch\"]/span").click();
        await browser.$("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]").click()
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView()
        return await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click()
    }
    public async fillFinancialDetails() {
        await browser.$("//*[@name=\"employmentStatus\"]").waitForClickable()
        const employmentStatus = await browser.$("//*[@name=\"employmentStatus\"]")
        await employmentStatus.selectByIndex(5);
        await browser.$("//*[@name=\"occupationSearch\"]").scrollIntoView();
        await browser.$("//*[@name=\"occupationSearch\"]").setValue("Professional");
        await browser.$("//*[@id=\"typeahead-830-1994-option-1\"]/a/strong").click();
        await browser.$("//*[@name=\"incomeAmount\"]").setValue("20000");
        const incomeFrequency = await browser.$("//*[@name=\"incomeFrequency\"]")
        await incomeFrequency.selectByIndex(4);
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView()
        return await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click()
    }
    public async enterExpenseDetails() {
        await browser.$("//*[@name=\"expenseAmount\"]").setValue("6000")
        const expenseFrequency = await browser.$("//*[@ng-model=\"expense.frequency\"]")
        return await expenseFrequency.selectByIndex(3);
    }
}

export default new CheckMyEligibilityPage();