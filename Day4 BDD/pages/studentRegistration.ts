import { Page, expect } from '@playwright/test';

export class StudentRegistrationPage {
  constructor(private page: Page) {}

  async navigateToRegistrationPage() {
    await this.page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  }

  async fillRegistrationForm(
    name: string,
    email: string,
    gender: string,
    mobile: string,
    dob: string,
    subject: string,
    hobby: string,
    address: string,
    state: string,
    city: string
  ) {
    // Name
    await this.page.getByRole('textbox', { name: 'Name:' }).fill(name);
    await this.page.waitForTimeout(500);

    // Email
    await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);
    await this.page.waitForTimeout(500);

    // Gender
    if (gender.toLowerCase() === 'male') {
      await this.page.getByRole('radio', { name: 'Gender:' }).nth(0).check();
    } else {
      await this.page.getByRole('radio', { name: 'Gender:' }).nth(1).check();
    }
    await this.page.waitForTimeout(500);

    // Mobile
    await this.page
      .getByRole('textbox', { name: 'Mobile(10 Digits):' })
      .fill(mobile);
    await this.page.waitForTimeout(500);

    // DOB
    await this.page
      .getByRole('textbox', { name: 'Date of Birth:' })
      .fill(dob);
    await this.page.waitForTimeout(500);

    // Subject
    await this.page
      .getByRole('textbox', { name: 'Subjects:' })
      .fill(subject);
    await this.page.waitForTimeout(500);

    // Hobby
    await this.page
      .getByText(hobby, { exact: true })
      .locator('..')
      .locator('input[type="checkbox"]')
      .check();
    await this.page.waitForTimeout(500);

    // Address
    await this.page
      .getByRole('textbox', { name: 'Currend Address' })
      .fill(address);
    await this.page.waitForTimeout(500);

    // State
    await this.page.locator('#state').selectOption(state);
    await this.page.waitForTimeout(500);

    // City
    await this.page.locator('#city').selectOption(city);
    await this.page.waitForTimeout(500);
  }

  async verifyLoginButtonEnabled() {
    const loginButton = this.page.getByRole('button', { name: 'Login' });

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    console.log('Login button is enabled');
  }
}