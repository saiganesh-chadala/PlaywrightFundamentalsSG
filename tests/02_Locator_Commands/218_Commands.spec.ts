import { test , expect} from "@playwright/test";

test("goto with different waitUntil Opotions", async({page})=>{
    await page.goto('https://app.vwo.com', {waitUntil:"commit"});
    console.log("commit: server responded");

    //Wait for html to be parsed
    await page.goto('https://app.vwo.com', {waitUntil: "domcontentloaded"});
    console.log("document loaded: HTML parsed");

    //Default - wait for everything (images ,CSS, scripts)
    await page.goto('https://app.vwo.com', {waitUntil: "load"});
    console.log("load: all resources loaded")

    //Slowest - wait for all the network activity to stop
    await page.goto('https://app.vwo.com', {waitUntil: "networkidle"});
    console.log("networkidle: no request for 500ms");

});

test("navigate with custom referer", async({page})=>{
    //Tell the user came from Google
    await page.goto("https://app.vwo.com", {
        referer : "https://google.com/search?:q=testing+academy"
    });

    console.log("Page loaded with Google as referer");
    console.log("URL: " , page.url());
})