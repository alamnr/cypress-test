// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


// describe('My first test',()=>{
//   it('Does not do much!',()=>{
//     expect(true).to.equal(true);
//   })
// })

// describe('My second test',()=>{
//   it('My failed test', ()=>{
//     expect(true).to.equal(false);
//   })
// })

// describe('My first test', ()=>{
 
//   it('Find the content "type"',()=>{
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // should be on a new url
//     // includes  '/commands/actions'

//     cy.url().should('include','/commands/actions')
    
//     // Get an input , type into it
//     cy.get('.action-email').type('fake@email.com')
//     // verify that the value has been updated
//     cy.get('.action-email').should('have.value','fake@email.com')
//   })
// })


describe('My first test', ()=>{
 
  it('Find the content "type"',()=>{
    cy.visit('https://www.linkedin.com/',{failOnStatusCode: false})

    // Get an input , type into it
    cy.get('#session_key').type('alamnr@gmail.com')
    cy.get('#session_password').type('')

    // Click on submit button
    cy.get('[data-id="sign-in-form__submit-btn"]').click()
    //cy.contains('submit').click()

    // should be on a new url
    // includes  '/feed/?trk=homepage-basic_sign-in-submit'

    cy.url().should('include','/feed/?trk=homepage-basic_sign-in-submit')
    
    
    // verify that the value has been updated
    //cy.get('.action-email').should('have.value','fake@email.com')
  })
})