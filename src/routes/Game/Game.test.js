import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Game from './Game';
import { MemoryRouter } from 'react-router-dom';

const backToTitle = jest.fn()
const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
describe('Test of the game screen', ()=>{
  beforeEach(() =>{
    render(<Game correct={1} chars={chars} backToTitle ={backToTitle} />, {wrapper: MemoryRouter});
  })
  it("desplay correctly", ()=>{
    expect(screen.getByText("表示された数字または記号のキーを押してください")).toBeInTheDocument()
    expect(screen.getByTestId("char")).toHaveTextContent("1") //chars[1]
    expect(screen.getByTestId("correct")).toHaveTextContent("正解数: 1")
  })
  it("go back to title screen", () =>{
    const backBtn = screen.getByText("タイトルに戻る")
    fireEvent.click(backBtn)
    expect(backToTitle).toHaveBeenCalled()
  })  
})