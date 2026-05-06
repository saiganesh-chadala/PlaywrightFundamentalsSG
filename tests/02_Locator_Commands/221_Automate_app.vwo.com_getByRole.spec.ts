import {test , expect} from "@playwright/test";

test('automate app.vwo.com with getByRole', async ({page}) => {
        await page.goto('https://app.vwo.com');

        let emailTextBox = page.getByPlaceholder('Enter email ID', {exact: true}).first();
        let passwordTextBox = page.getByPlaceholder('Enter password', {exact: true}).first();
        let signinBtn = page.getByRole("button",{name:'Sign in'}).first();
        let errorMsg = page.getByText('Your email, password, IP address or location did not match');

        await emailTextBox.fill('sai@gmail.com');
        await passwordTextBox.fill('gfhdgf');

        await signinBtn.click();

        await expect(errorMsg).toBeVisible();
        await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");

})