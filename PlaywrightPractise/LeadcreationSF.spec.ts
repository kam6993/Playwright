import {test, expect} from '@playwright/test';

test('Lead Creation and Assignment', async ({page}) => {

await page.goto('https://login.salesforce.com/');

await page.locator("//input[@id='username']").fill('dilipkumar.rajendran@testleaf.com');
await page.locator("//input[@id='password']").fill('TestLeaf@2025');
await page.locator("//input[@id='Login']").click();

await page.waitForTimeout(2000);

 await page.locator("//a[contains(text(),'Leads')]").click();
 await page.waitForTimeout(2000);
 await page.locator("//div[contains(text(),'New')]").click();
 await page.waitForTimeout(2000);

 await page.locator("//button[@name='salutation']").click();
 //  await page.locator("//input[@name='firstName']").fill('Kamal');    
  await page.locator("//input[@name='lastName']").fill('Raj');
  await page.locator("//input[@name='Company']").fill('Wipro');
await page.locator("(//button[contains(text(),'Save')])[2]").click();


//  await page.locator("//button[@data-value='Mr.']").click();
//  await page.locator("//input[@name='firstName']").fill('Kamal');    
//  await page.locator("//input[@name='lastName']").fill('Raj');
//  await page.locator("//input[@name='Company']").fill('Wipro');


// await page.locator("//input[@id='createLeadForm_companyName']").fill('Wipro');
// await page.locator("//input[@id='createLeadForm_firstName']").fill('Kamal');    
// await page.locator("//input[@id='createLeadForm_lastName']").fill('Raj');
// await page.locator("//input[@name='personalTitle']").fill('Mr');
// await page.locator("//input[@name='generalProfTitle']").fill('Automation Tester');
// await page.locator("//input[@name='annualRevenue']").fill('5000000');
// await page.locator("//input[@name='departmentName']").fill('IT');
// await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill('9940698340');

// await page.waitForTimeout(2000);
// await page.locator("//input[@name='submitButton']").click();

// await page.waitForTimeout(3000);

await page.close
})