import {test , expect} from "@playwright/test";

test('Verify Error Message in Invalid Login', async({page}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com');

    let make_appnt_buttin = await page.locator('#btn-make-appointment');

    await make_appnt_buttin.click();

    let username = await page.locator('#txt-username');
    let password = await page.locator('#txt-password');
    let login_btn = await page.locator('#btn-login');

    await username.fill('John Doe');
    await password.fill('ThisIsNotAPassword');
    await login_btn.click();

    let appntPage_Url = "https://katalon-demo-cura.herokuapp.com/#appointment";
    let make_appnt_header = await page.locator('h2');

    // await expect(page.url()).toBe(appntPage_Url);
    await expect(page).toHaveURL(appntPage_Url);
    await expect(make_appnt_header).toContainText('Make Appointment');
})
