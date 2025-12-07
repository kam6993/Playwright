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
await page.locator("//a[contains(text(),'Create Lead')]").click();

await page.waitForTimeout(2000);
await page.locator("//input[@id='createLeadForm_companyName']").fill('Wipro');
await page.locator("//input[@id='createLeadForm_firstName']").fill('Kamal');    
await page.locator("//input[@id='createLeadForm_lastName']").fill('Raj');
await page.locator("//input[@name='personalTitle']").fill('Mr');
await page.locator("//input[@name='generalProfTitle']").fill('Automation Tester');
await page.locator("//input[@name='annualRevenue']").fill('5000000');
await page.locator("//input[@name='departmentName']").fill('IT');
await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill('9940698340');

await page.waitForTimeout(2000);
await page.locator("//input[@name='submitButton']").click();

await page.waitForTimeout(3000);

await page.close
})