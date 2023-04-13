import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('the user visits {string}', (pageName) => {
    console.log(pageName)
});