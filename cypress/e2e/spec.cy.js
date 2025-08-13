describe('teste automação', () => {
  it('testes com sucesso', () => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
    cy.get('.react-switch-bg').click()
    cy.get('.react-switch-bg').click()
    cy.get(':nth-child(3) > .board-cards > :nth-child(1) > .content > footer > label').click()
    cy.get('section > .custom-input > p').type('implementar cor')
    cy.get('.btn').click()
    cy.get('section > .custom-input > p').click()
    cy.get('.sc-gsnTZi').type('cores de fundo')
    cy.get('.btn').click()
    
  })
})