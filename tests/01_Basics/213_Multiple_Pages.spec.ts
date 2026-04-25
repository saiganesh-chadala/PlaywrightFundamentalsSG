import { chromium } from "playwright";

async function multiTabTest() {
    let browser =  await chromium.launch({headless:false});
    let context = await browser.newContext();

    //Tab1
    let page1 = await context.newPage();
    await page1.goto("https://skillsedge.mercer.com")
    console.log("Tab 1 : Skills Edge Login page")
    
    //Tab 2
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com");
    console.log("Tab 2 : Vwo Login page")
}
multiTabTest();