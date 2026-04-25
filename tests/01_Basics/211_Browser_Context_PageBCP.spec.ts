import { chromium } from "playwright";
import type { Browser , BrowserContext , Page } from "playwright";

async function run() {
    //level 1 - Launch broswer
    const browser : Browser = await chromium.launch({headless: false});
    console.log("browser is launched : " , browser);

    //level 2: create contect
    let context : BrowserContext = await browser.newContext();
    console.log("Context is created : " , context);

    //level 3 - create a page
    let page : Page =  await context.newPage();
    console.log("Page is created ");

    await page.goto('https://app.vwo.com');
    console.log('Title :', await page.title());

    //cleanup - reverse order
    await page.close();
    await context.close();
    await browser.close();
    
}
await run();