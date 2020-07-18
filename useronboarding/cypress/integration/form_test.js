describe('form test that form is working properly', () => {
    it('test that form is working properly', () => {
        cy.visit("/")
        //get name iput and type a name in it.
        const name = "Jorge Jimenez"
        cy.get('[for="name"] > input')
        .type(name)
        //Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
        .should('have.value', name)
        //Get the Email input and type an email address in it
        const email = 'jorge-jimenez@gmail.com'
        cy.get('[for="email"] > input')
        .type(email)
        .should("have.value", email)
        //Get the password input and type a password in it
        cy.get('[for="password"] > input')
        .type('123456')
        .should('have.value', '123456')
        //Set up a test that will check to see if a user can check the terms of service box
        cy.get('[data-cy="terms"]')
        .click()
        .should('have.checked', true)
        //Check to see if a user can submit the form data
        cy.get('button')
        .click()
        //Check for form validation if an input is left empty
        cy.get('[for="email"] > input')
       .should('have.value', "")
       //or .shoudl('be.empty)
    })
})