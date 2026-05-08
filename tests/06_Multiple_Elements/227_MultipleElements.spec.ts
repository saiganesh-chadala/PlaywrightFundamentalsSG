import { test, expect } from "@playwright/test";

test('Handle multiple elements on the page', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const rightPanelListItemsText: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelListItemsText.length);

    for( const linkText of rightPanelListItemsText){
        if(linkText === "My Account"){
            await page.getByText("My Account").first().click();
            break;
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for(const link of rightPanelLinks){
        console.log(await link.getAttribute('href'))
    }
    
});
