import { test , expect } from "@playwright/test"

test ('verify the title of the page', async ({page}) => {
    await page.goto("https://skillsedge.mercer.com/")
    await expect(page).toHaveTitle("Mercer Skills Edge")
})