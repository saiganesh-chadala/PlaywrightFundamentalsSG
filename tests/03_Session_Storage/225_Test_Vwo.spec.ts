import {test , expect} from "@playwright/test";

test.use({
    storageState: "./user-session.json"
});

test('go directly to dashboard without login', async ({page}) => {
    await page.goto("https://app.vwo.com/#/dashboard/get-started?accountId=1227004");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded no login needed ");
    await page.waitForTimeout(3000);
});

test('go directly to settigs without login', async({page}) => {
    await page.goto("https://app.vwo.com/#/settings/accounts/general?accountId=1227007");
    await expect(page).toHaveURL(/settings/);
    console.log("Settings loaded no login needed ");
    await page.waitForTimeout(5000);
})