describe('Fill form', _ => {
    it('enters duke', _ => {
        cy.visit('http://localhost:3000')
        console.dir(window.formView);
        cy.pause();
        cy.get('#firstName').
            type('duke')
        cy.pause();
        cy.get('input[type=submit]').
            click()
        cy.get('#lastName').type('chief');        
        cy.get('output').
            should('contain', 'submitted')
    })
})    