import userData from '../fixtures/users/userData.json'
import Login from '../pages/loginPage'
import DashBoard from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';

const loginPage = new Login()
const dashboardPage = new DashBoard()
const menuPage = new MenuPage()

describe('Orange HRM tests', () => {
  const selectorsList = {
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    MiddleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    GenericCombobox: ".oxd-select-text",
    SecondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    ThirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('user info update - success', () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    cy.get(selectorsList.firstNameField).clear().type('FirstName');
    cy.get(selectorsList.MiddleNameField).clear().type('MiddleName');
    cy.get(selectorsList.lastNameField).clear().type('LastName');
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee');
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest');
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest');
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10');
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.GenericCombobox).eq(0).click({ force: true });
    cy.get(selectorsList.ThirdItemCombobox).click();
    cy.get(selectorsList.GenericCombobox).eq(1).click({ force: true });
    cy.get(selectorsList.SecondItemCombobox).click();
    cy.get(selectorsList.submitButton).eq(0).click({ force: true });
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close');
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredencialAlert);
  })
})
