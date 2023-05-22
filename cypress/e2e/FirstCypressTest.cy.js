///<Reference types="cypress" />

describe('First Test',()=>{

    it('Login in HRM', ()=>{
        cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.url().should('include','/dashboard')




    })


})