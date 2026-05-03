const { test, expect } = require('@playwright/test');

test('Login to Rahul Shetty Academy and Add Product to Cart', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Enter username
  await page.fill('input[name="username"]', 'rahulshettyacademy');
  console.log('Username entered');

  // Enter password
  await page.fill('input[name="password"]', 'Learning@830$3mK2');
  console.log('Password entered');

  // Select Admin radio button
  await page.locator('input[value="admin"]').click();
  console.log('Admin radio button selected');

  // Select Student from dropdown
  await page.selectOption('select[class*="form-control"]', 'stud');
  console.log('Student selected from dropdown');

  // Click "I agree" checkbox
  await page.locator('input[type="checkbox"]').click();
  console.log('I agree checkbox clicked');

  // Click Sign in button
  await page.locator('input[type="submit"]').click();
  console.log('Sign in button clicked');

  // Wait for navigation to dashboard
  await page.waitForLoadState('networkidle');
  console.log('Successfully logged in');

  // Wait for product buttons to be visible
  await page.waitForSelector('button.btn.btn-info');
  await page.waitForTimeout(1000);

  // Get "Add" buttons with class "btn btn-info"
  const addButtons = await page.locator('button.btn.btn-info');
  const buttonCount = await addButtons.count();
  console.log(`Found ${buttonCount} product buttons`);

  // Click Add button for first product
  if (buttonCount > 0) {
    await addButtons.first().click();
    console.log('First product added to cart');
  }

  // Wait a moment for cart update
  await page.waitForTimeout(1500);

  // Take a screenshot
  await page.screenshot({ path: 'product-added.png' });

  console.log('Product successfully added to cart');
});
