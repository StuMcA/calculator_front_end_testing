// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working mathematical operations', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '15')
  })

  it('should chain operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '256')
  })

  it('should work for negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '-5');
    cy.get('#operator_multiply').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-35');
  })

  it('should work for decimals', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '3.5');
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1.5');
  })

  xit('should work for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '22222222217777777778');
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '9999999994444444444.5');
  })

  it('should display not defined when dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', 'undefined');
  })
})
