import {test, expect} from '@playwright/test';

test('Lead Creation and Assignment', async ({page}) => {

await page.goto('http://leaftaps.com/opentaps');

await page.locator("//input[@id='username']").fill('demosalesmanager');
await page.locator("//input[@id='password']").fill('crmsfa');
await page.locator("//input[@type='submit']").click();

await page.waitForTimeout(2000);
await page.locator("//a[contains(text(),'CRM')]").click();
await page.waitForTimeout(3000);
await page.locator("//a[text()='Leads']").click();
await page.waitForTimeout(2000);
await page.locator("//a[contains(text(),'Find Leads')]").click();
await page.waitForTimeout(2000);
await page.locator("(//input[@name='firstName'])[3]").fill('Kamal');
await page.waitForTimeout(1000);
await page.locator("//button[contains(text(),'Find Leads')]").click();

await page.waitForTimeout(2000);

await page.locator("(//a[contains(text(),'11762')])[1]").click();
await page.waitForTimeout(2000);
await page.locator("//a[contains(text(),'Edit')]").click();
await page.waitForTimeout(2000);

await page.locator("//input[@id='updateLeadForm_companyName']").fill('HCL Tech');
await page.locator("//input[@id='updateLeadForm_annualRevenue']").fill('13500000');
await page.waitForTimeout(2000);

await page.locator("//input[@id='updateLeadForm_departmentName']").fill('Management');
await page.locator("//textarea[@id='updateLeadForm_description']").fill('Updated the details successfully');
await page.waitForTimeout(2000);
await page.locator("//input[@value='Update']").click();
await page.waitForTimeout(3000);

await page.close();

})