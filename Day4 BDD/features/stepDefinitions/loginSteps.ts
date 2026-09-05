import {Given,When,Then} from '@cucumber/cucumber';
import {LoginPage} from '../../pages/loginPage'
import {StudentRegistrationPage} from '../../pages/studentRegistration'
import {CustomWorld} from '../../support/world'
 
let login : LoginPage;
Given('User opens the application', async function (this:CustomWorld) {
 
    login = new LoginPage(this.page);
    await login.openApp();       
});
When('User enters credentials', async function (this:CustomWorld){
 
     await login.login();
});
 
Then('User should login successfully',async function (this:CustomWorld) {
  
    console.log("Login successfully")      
});
 
When('User enters {string} and {string}', async  function (username: string, password: string) {
 
    await login.loginwithmultipleusers(username, password);
}); 
 
 
When('User enters invalid credentials', async function (this:CustomWorld){
 
  await login.loginWithInvalidCredentails();
  await login.clickButton();
});
 
Then('the user should see an error message', async function (this:CustomWorld) {
    console.log("error displayed");
    await login.errorcheck();
 
});

Then('User should view the error message', async function() {
    console.log("error displayed");
});







let studentRegistrationPage: StudentRegistrationPage;

Given('the student is on the registration page', async function (this: CustomWorld) {
  studentRegistrationPage = new StudentRegistrationPage(this.page);
  await studentRegistrationPage.navigateToRegistrationPage();
});

When(
  'the student enters valid registration details {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}',
  async function (
    this: CustomWorld,
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
    await studentRegistrationPage.fillRegistrationForm(
      name,
      email,
      gender,
      mobile,
      dob,
      subject,
      hobby,
      address,
      state,
      city
    );
  }
);

Then('the login button should be enabled', async function (this: CustomWorld) {
  await studentRegistrationPage.verifyLoginButtonEnabled();
}); 