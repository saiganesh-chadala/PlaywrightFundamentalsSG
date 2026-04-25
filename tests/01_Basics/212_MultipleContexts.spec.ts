import { chromium } from "playwright";

async function multiUserTest() {
    let browser = await chromium.launch({headless:false});

    //Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com");
    console.log("Admin is on Login page");

    //User
    let userContext = await browser.newContext();
    let userPage = await userContext.newPage();
    await userPage.goto("https://app.vwo.com");
    console.log("User is on Login page");

    await adminContext.close();
    await userContext.close();
    await browser.close();
}
multiUserTest();