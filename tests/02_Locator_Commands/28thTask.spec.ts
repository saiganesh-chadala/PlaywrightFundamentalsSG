import {test , expect} from "@playwright/test";

test('automating vwo login by using getByRole', async({page})=> {
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage"); 

    // const freeTrialLink = page.getByRole("link",{name:"Start a free trial"});
    const businessEmailCheckbox = page.getByLabel("Business Email ").first();
    const gmailErrorMsg = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");
    
    // await freeTrialLink.click({delay:2000});

    await businessEmailCheckbox.pressSequentially("sai@gmail.com",{delay:200});
    // await page.waitForTimeout(2000);

    await expect(gmailErrorMsg).toBeVisible();
    await expect(gmailErrorMsg).toContainText("gmail.com doesn't look like a business domain. Please use your business email.");
    
});