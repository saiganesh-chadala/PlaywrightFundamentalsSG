import { test, expect } from "@playwright/test";

test('Handle multiple elements on the page', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable.html'); 

    ////table[@id="customers"]/tbody/tr[
    // 4
    // ]/td[
    // 3
    //]

    const firstPart = '//table[@id="customers"]/tbody/tr[';
    const secondPart = ']/td[';
    const thrdPart = ']';

    const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
    const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

    for(let i =2 ; i<=rows ; i++){
        for (let j=1; j<=cols ; j++){
            const dynPath = `${firstPart}${i}${secondPart}${j}${thrdPart}`
            const data = await page.locator(dynPath).innerText();
            console.log(data);

            if(data.includes('Roland Mendel')){
                let countryPath = `${dynPath}/following-sibling::td`
                let countryText = await page.locator(countryPath).innerText();
                console.log('-----------------');
                console.log("Roland Mendel is in : ", countryText);
            }
        }
    }

    let rowSel = page.locator('#customers tbody tr', {hasText: 'Helen Bennett'});
    let country = await rowSel.locator('td').nth(2).innerText();
    console.log("Hellen Bennet is in : ", country)

});