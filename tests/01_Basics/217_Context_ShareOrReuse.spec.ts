import {test} from "@playwright/test";

test.describe('Shared Context tests', ()=>{
    test.use({
        viewport: { width:1280 , height:720},
        locale: 'en-US',
    });

    test('test 1', async({page})=> {
        await page.goto('https://app.vwo.com');
    });

    test('test 2', async({page})=>{
        await page.goto('https://skillsedge.mercer.com')
    });
})