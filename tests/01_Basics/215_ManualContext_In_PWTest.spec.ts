import {test , expect } from "@playwright/test";

test("two users interact", async({browser})=>{
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com");

    let userContext = await browser.newContext();
    let userPage = await userContext.newPage();
    await userPage.goto("https://skillsedge.mercer.com");

    await adminPage.close();
    await adminContext.close();

    await userPage.close();
    await userContext.close();

})