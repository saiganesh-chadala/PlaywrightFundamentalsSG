import { test , expect } from "@playwright/test";
import * as allure from "allure-js-commons"
// import { allure } from "allure-playwright";

test('test the login function', async({page}) => {
    await allure.epic("VWO Login tests");
    await allure.description("Verify that login works");
    await allure.feature("Critical Feature");
    await allure.story("Authentication");

    await page.goto("https://app.vwo.com/#login");
    // await page.waitForTimeout(3000);

    await page.fill('#login-username', "opg73@singleuseemail.site");
    await page.fill('#login-password', "Wingify@4321");
    await page.waitForTimeout(2000);

    await page.click('#js-login-btn');

    await page.waitForURL(/#\/(dashboard|home)/, {timeout: 15000});
    await page.waitForTimeout(5000); 

});