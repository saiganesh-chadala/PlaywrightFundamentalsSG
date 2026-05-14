import { test, expect, FrameLocator, Locator } from "@playwright/test";

test('Basic Web test with Frame', async({page}) => {
    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1 : FrameLocator = page.frameLocator('#pact1');
    let frame2 : FrameLocator = frame1.first().frameLocator('#pact2');
    let frame3 : FrameLocator = frame2.frameLocator('#pact3');
    
    await page.waitForTimeout(5000);
    await frame1.first().getByPlaceholder('First Crush').fill('Anushka');
    await frame2.getByPlaceholder('Current Crush Name').fill('Rukmini');
    await frame3.getByPlaceholder('Destiny').fill('Wife');



});