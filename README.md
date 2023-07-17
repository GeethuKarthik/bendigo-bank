# bendgo-bank
Bandigo Bank Web Automation

Prerequisite
1. Install Node.js and npm
      check node and npm is installed in your machine
           node -v
           npm -v
2. Install TypeScript
    npm install -g typescript
3. Install any IDE(Preferably VSCode)
     install Cucumber(Gherkin) Full Support extension

Install and run WDIO
1. Create a folder for your project in your machine and move inside the folder
2. Do npm init -y
3. Do npm i --save-dev @wdio/cli
4. Setup tsconf.json and create your feature files, object files and step-definitions
5. To run your tests, execute
   npm run wdio or npx wdio wdio.conf.ts

Code Structure
Tests are written in the Cucumber framework using the Gherkin Syntax and the repository contains the WebdriverIO page object example written using TypeScript.
The POM pattern gives you really a lot of opportunities to encapsulate page information from your actual tests, which is important to keep your test suite structured and clear in times where the project and number of tests grows. All selectors or specific instructions that are unique for a certain page is stored in a page object, so that you still can run your test after you've completely redesigned your page and POM makes tests more maintainable and easier to scale by allowing changes to the UI without affecting the tests. 

page object folder contains all methods, selectors, and functionality shared across all page objects. Here we have pageobject files for bendigobank homepage,checkmyeligibility or general purpose page and one for cancel popup.

We have separate spec files for our testcases written under step-definition folder for all the three object files.

A runner file under feature folder that specifies the scenarios to execute the test