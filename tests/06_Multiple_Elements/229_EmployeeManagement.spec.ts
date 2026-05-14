import { test, expect } from "@playwright/test";

test.describe("Employee Management", () => {

    test("should display employee table and verify data", async ({ page }) => {
        await page.goto("https://awesomeqa.com/webtable.html");

        // Verify the table is visible
        const table = page.locator('#customers');
        await expect(table).toBeVisible();

        // Count rows (excluding header)
        const rows = await page.locator('#customers tbody tr').count();
        console.log(`Total rows: ${rows}`);
        expect(rows).toBeGreaterThan(0);
    });

    test("should find a specific employee by name", async ({ page }) => {
        await page.goto("https://awesomeqa.com/webtable.html");

        const targetName = "Roland Mendel";

        const rows = await page.locator('#customers tbody tr').count();

        for (let i = 1; i <= rows; i++) {
            const rowLocator = page.locator(`#customers tbody tr:nth-child(${i})`);
            const rowText = await rowLocator.innerText();

            if (rowText.includes(targetName)) {
                const country = await rowLocator.locator('td').nth(2).innerText();
                console.log(`${targetName} is from: ${country}`);
                expect(country).toBeTruthy();
                break;
            }
        }
    });

    test("should edit an employee row", async ({ page }) => {
        await page.goto("https://awesomeqa.com/webtable.html");

        // Locate the row containing the employee to edit
        const targetRow = page.locator('#customers tbody tr', { hasText: "Helen Bennett" });
        await expect(targetRow).toBeVisible();

        const company = await targetRow.locator('td').nth(1).innerText();
        const country = await targetRow.locator('td').nth(2).innerText();

        console.log(`Helen Bennett - Company: ${company}, Country: ${country}`);
        expect(company).toBeTruthy();
        expect(country).toBeTruthy();
    });

});
