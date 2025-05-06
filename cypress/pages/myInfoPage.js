class MyInfoPage {
    selectorsList() {
        const selectors = {
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
        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().MiddleNameField).clear().type(middleName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
    }
    fillemployeeDetails(employeeId, otherId, driverLicenseNumber, ExpiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber);
        cy.get(this.selectorsList().dateField).eq(0).clear().type(ExpiryDate);
        cy.get(this.selectorsList().dateCloseButton).click();
    }
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true });
        cy.get('body').should('contain', 'Successfully Updated');
        cy.get('.oxd-toast-close');
    }
    fillStatus(){
        cy.get(this.selectorsList().GenericCombobox).eq(0).click({ force: true });
        cy.get(this.selectorsList().ThirdItemCombobox).click();
        cy.get(this.selectorsList().GenericCombobox).eq(1).click({ force: true });
        cy.get(this.selectorsList().SecondItemCombobox).click();
    }
}

export default MyInfoPage
