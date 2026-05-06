import {test , expect} from "@playwright/test";

test('CSS Locators using nth', async ({page}) => {
    await page.goto('https://awesomeqa.com/css/');

    const allSpan = page.locator('div.first > span');
    const allSpanCount = await allSpan.count();

    console.log("No of Spans present: ", allSpanCount);

    const span1 = await allSpan.first().textContent();
    const span2 = await allSpan.nth(1).textContent();
    const span3 = await allSpan.nth(2).textContent();
    const span5 = await allSpan.nth(4).textContent();
    const lastspan =  await allSpan.last().textContent();

    console.log("first (span1):", span1);
    console.log("second (span2):", span2);
    console.log("third (span3):", span3);
    console.log("fifth (span5):", span5);
    console.log("last (last span):", lastspan);

    for(let i=0 ; i<allSpanCount; i++){
        const ith_span = await allSpan.nth(i).textContent();
        console.log(ith_span);
    }

});