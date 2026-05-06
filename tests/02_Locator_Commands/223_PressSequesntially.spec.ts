import {test , expect} from "@playwright/test";

test('CSS Locators using nth', async ({page}) => {
    await page.goto('https://awesomeqa.com/practice.html');

    await page.locator("input[name = 'firstname']").pressSequentially("The testing playwright", {delay:200});
    await page.waitForTimeout(2000);

    await page.goto('https://app.vwo.com');
    // await page.waitForTimeout(2000);

    await page.goBack();
    await page.waitForTimeout(2000);

    await page.goForward();
    await page.waitForTimeout(2000);

    await page.goBack();
    await page.waitForTimeout(2000);

    await page.reload();
});