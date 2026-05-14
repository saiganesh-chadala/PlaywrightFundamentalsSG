import { test, expect, FrameLocator } from "@playwright/test";

test('Basic Web test with Frame', async({page}) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames');

    let frame : FrameLocator = page.frameLocator('#frame-one');

    await frame.locator('#RESULT_TextField-1').fill('Himalayan411');
    await frame.locator('#RESULT_TextField-2').fill('Sai Ganesh');
    await frame.locator('#RESULT_TextField-3').fill('6836');
    await frame.locator('#RESULT_TextField-4').fill('2022');
    await frame.locator('#RESULT_RadioButton-1').selectOption('Two-wheeler');
    await frame.locator('#RESULT_TextArea-1').fill("Super off roading bike");

    await frame.getByText('Submit registration', {exact: true}).click();

    // await frame.locator('#vehicle-submit').click();
    let output = await frame.locator('#vehicle-output').innerText();
    console.log(output);
    await page.waitForTimeout(2000);


})