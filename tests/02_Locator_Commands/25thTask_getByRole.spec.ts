import {test , expect} from "@playwright/test";

test('automating vwo login by using getByRole', async({page})=> {
    await page.goto("https://app.vwo.com");

    await page.getByRole("textbox",{name: "Email address"}).fill("wrongusername");
    await page.getByRole("textbox",{name: "Password"}).fill("bjkhdcbash");

    await page.getByRole("button", {name: "Sign in" , exact: true}).click();

    let err_msg = page.getByText("Your email, password, IP address or location did not match");
    await expect(err_msg).toBeVisible();

    await expect(err_msg).toHaveText('Your email, password, IP address or location did not match');
})