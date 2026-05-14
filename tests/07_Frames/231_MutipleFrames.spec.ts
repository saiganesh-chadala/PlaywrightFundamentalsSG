import { test, expect, FrameLocator, Locator } from "@playwright/test";

test('Basic Web test with Frame', async({page}) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let frame1 : FrameLocator = page.frameLocator('[name = "main"]'); 
    let header =  await frame1.locator('h2').innerText();
    console.log(header);

    const allFrames : Locator[] = await page.locator('//frame').all();
    console.log('Total no of frames: ', allFrames.length);

    for(const frame of allFrames){
        console.log(await frame.getAttribute('name') +' : ' + await frame.getAttribute('src'))
    }


   let sideFrame : FrameLocator = page.frameLocator('[name = "side"]');  
   await sideFrame.getByTestId('side-link-registration').click();
   await page.waitForTimeout(3000);

});