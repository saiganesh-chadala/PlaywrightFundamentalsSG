import { test , expect } from "@playwright/test";

test('automating TTA Signup and transfer amount', async({page})=> {
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    let signupBtn = page.getByRole("button", {name: "Sign Up"});
    let FullNameTextBox = page.locator('div:has(> label:has-text("Full Name")) input');
    let emailTextBox = page.locator('div:has(> label:has-text("Email Address")) input');
    let passwordTextBox = page.locator('div:has(> label:has-text("Password")) input');
    let createAccBtn = page.getByRole("button", {name : "Create Account"});
    

    let dashboardHdr = page.locator('h1:has-text("Dashboard")')
    let totalBalLoc =  page.locator('div:has-text("Total Balance") h3').first();
    let transferAmount = 5000;
    let note = "Praja Seva"
    let uniqueEmail = `janasenani+${Date.now()}@power.com`;

    let transferFundsBtn = page.getByRole("button", {name : "Transfer Funds"});
    let dashboardBtn = page.getByRole("button", {name : "Dashboard"});
    let transferFundsHdr = page.locator('h1:has-text("Transfer Funds")')
    let transferAmountTextbox = page.locator('div:has(> label:has-text("Amount")) input');
    let noteTextbox = page.locator('div:has(> label:has-text("Note (Optional)")) input');
    let continueBtn = page.getByRole("button", {name : "Continue"});

    let reviewTransferHdr = page.locator('//h3[text()="Review Transfer"]');
    let confirmTransferAmount = page.locator('//div[span[text()="Amount"]]/span[contains(@class,"font-bold")]')
    let confirmTransferBtn = page.getByRole("button", {name : "Confirm Transfer"});

    await signupBtn.click();
    await page.waitForTimeout(3000);
    await FullNameTextBox.fill("PowerStar");
    await emailTextBox.fill(uniqueEmail);
    await passwordTextBox.fill("Sep2");
    await createAccBtn.click();
    await page.waitForTimeout(2000);

    await expect(dashboardHdr).toBeVisible();
    await expect(totalBalLoc).toBeVisible();
    let totalBal = await totalBalLoc.textContent();
    console.log("Total Balance before Transfer : ", totalBal);
    let totalBalVal = parseInt(totalBal.replace(/[$,]/g, ''), 10);
    

    await transferFundsBtn.click();
    await expect(transferFundsHdr).toBeVisible();
    await page.waitForTimeout(2000);

    await transferAmountTextbox.fill(`${transferAmount}`);
    await noteTextbox.fill(note);
    await continueBtn.click();
    await page.waitForTimeout(2000);

    await expect(reviewTransferHdr).toBeVisible();
    await expect(confirmTransferAmount).toHaveText('$' + transferAmount.toString() + '.00');
    
    await confirmTransferBtn.click();
    await dashboardBtn.click();
    await expect(dashboardHdr).toBeVisible();
    await expect(totalBalLoc).toBeVisible();
    
    let totalBalAfterText = await totalBalLoc.textContent();
    let totalBalAfterTransfer = parseInt(totalBalAfterText.replace(/[$,]/g, ''), 10);
    await expect(totalBalAfterTransfer).toEqual(totalBalVal - transferAmount);
    console.log("Total Balance after Transfer : ", totalBalAfterText);
    
});