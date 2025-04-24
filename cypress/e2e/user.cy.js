import userData from '../fixtures/users/userData.json'

describe('Orange HRM tests', () => {
  const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert:"[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    MiddleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }
  it.only('user info update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.MiddleNameField).clear().type('MiddleName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  })
  
})