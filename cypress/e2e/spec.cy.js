function goToGameScreen(){
  cy.contains("プレイする").click();
  cy.url().should("include", "/game")
}
function goBackToTitleScreen(){
  cy.contains("タイトルに戻る").click();
  cy.url().should("eq", "http://localhost:3000/")
}

describe('Test of the game app', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('can go to game screen from title screen', () => {
    goToGameScreen()
  })
  it('can go back to title screen from game screen', ()=>{
    goToGameScreen()
    goBackToTitleScreen()
  })
  it('can go to result screen from game screen after 10 correct answer', ()=>{
    goToGameScreen()
    for (let i = 0; i < 10; i++){
      cy.get('[data-testid="char"]').then((char) => {
        if (char.text() != "1"){          //one mistake for every typing
          cy.get('body').type("1");
        }else{
          cy.get('body').type("2");
        }
        cy.get('body').type(char.text());
      })
    };
    cy.get('[data-testid="inCorrect"]').should("have.text", "ミスタイプ数: 10")
    cy.get('[data-testid="correctRate"]').should("have.text", "正解率: 50%")
  })
  it('can go back to title screen from result screen', ()=>{
    goToGameScreen()
    for (let i = 0; i < 10; i++){
      cy.get('[data-testid="char"]').then((char) => {
        if (char.text() != "1"){          //one mistake for every typing
          cy.get('body').type("1");
        }else{
          cy.get('body').type("2");
        }
        cy.get('body').type(char.text());
      })
    };
    goBackToTitleScreen()
  })
})
