
const navbarText = Cypress.env('navbarText');
context('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('has an h1 on the page', () => {
  //   cy.get('h1').should('exist')
  // })

  // it('renders the correct h1 text', () => {
  //   cy.get('h1').should('contain.text', 'Actions')
  // })

  // it('render a paragraph under the h1', () => {
  //   cy.get('.container').eq(1).find('p').should('exist')
  // })

  // it('render a section with the correct elements', () => {
  //   cy.get('.container').eq(2).within(() => {
  //     cy.get('#type').should('exist')
  //     cy.get('p').should('exist')
  //   })
  // })

  it('correctly renders the cypress website link', () => {
    cy.findByText(navbarText).should('exist')
  })
})
