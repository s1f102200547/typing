import {render, screen, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

function goToGameScreen(){
  const startBtn = screen.getByText("プレイする");
  fireEvent.click(startBtn);
}
async function Type(char){
  const user = userEvent.setup()
  if (char === '{') {
    char = '{' + char;
} else if (char === '[') {
    char = '[' + char;
}
await user.keyboard(char);
}

describe('test of App', () => {
  beforeEach(() => {
    render(<App/>, {wrapper: MemoryRouter});
  })

  it('App starts at title screen', () => {
    expect(screen.getByText("数学・記号専用のタイピング練習ゲーム")).toBeInTheDocument()
  })
  
  it("go to game screen", () => {
    goToGameScreen();
    expect(screen.getByText('表示された数字または記号のキーを押してください')).toBeInTheDocument();
  })
  it("go back to title screen from game screen", () => {
    goToGameScreen();
    fireEvent.click(screen.getByText('タイトルに戻る'));
    expect(screen.getByText("数学・記号専用のタイピング練習ゲーム")).toBeInTheDocument()
  })
  it("increase the number of correct answers", async()=>{
    goToGameScreen()
    expect(screen.getByText("正解数: 0")).toBeInTheDocument()
    const char = screen.getByTestId("char").textContent;
    await Type(char);
    expect(screen.getByText("正解数: 1")).toBeInTheDocument()
  })
  it("not increase the number of incorrect answers", async()=>{
    goToGameScreen()
    expect(screen.getByText("正解数: 0")).toBeInTheDocument()
    const char = screen.getByTestId("char").textContent;
    if (char === "1"){
      await Type("2");
    } else{
      await Type("1")
    }
    expect(screen.getByText("正解数: 0")).toBeInTheDocument()
  })

  it("go result screen after 10 correct", async() =>{
    goToGameScreen();
    for (let i = 1; i <= 10; i++){
      const char = screen.getByTestId("char").textContent;
      await Type(char);
    }
    expect(screen.getByText("結果")).toBeInTheDocument();
  })
  it("go back to title screen from result screen", async() => {
    goToGameScreen();
    for (let i = 1; i <= 10; i++){
      const char = screen.getByTestId("char").textContent;
      await Type(char);
    }
    fireEvent.click(screen.getByText('タイトルに戻る'));
    expect(screen.getByText("数学・記号専用のタイピング練習ゲーム")).toBeInTheDocument()
  })
})