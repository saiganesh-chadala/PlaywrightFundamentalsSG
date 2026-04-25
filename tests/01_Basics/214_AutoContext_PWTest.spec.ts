import { test  } from "@playwright/test"

test("Test 1 with Skills Login page" , async ({page})=> {
    await page.goto("https://skillsedge.mercer.com");
    console.log("Auto Context 1 and page with Skills ");
});

test("Test 2 with Vwo.com Loginn page", async ({page})=>{
    await page.goto("https://app.vwo.com");
    console.log("Auto Context 2 and page with vwo ");

});