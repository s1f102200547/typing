import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Result from './Result';
import { MemoryRouter } from 'react-router-dom';

const backToTitle = jest.fn()
describe("test of result screen", ()=>{
  beforeEach(() =>{
    render(<Result 
      backToTitle={backToTitle}
      inCorrect={1}
      elaspsedTime={1011}
      />, {wrapper: MemoryRouter})
  })
  it("renders", ()=>{
    expect(screen.getByText("結果")).toBeInTheDocument()
    expect(screen.getByTestId("time")).toHaveTextContent("00:10:11")
    expect(screen.getByTestId("correct")).toHaveTextContent("正しく打ったキーの数: 10")
    expect(screen.getByTestId("average")).toHaveTextContent("平均キータイプ数: 1")
    expect(screen.getByTestId("inCorrect")).toHaveTextContent("ミスタイプ数: 1")
    expect(screen.getByTestId("correctRate")).toHaveTextContent("正解率: 90%")
  })
  it("go back to title screen", () =>{
    const backBtn = screen.getByText("タイトルに戻る")
    fireEvent.click(backBtn)
    expect(backToTitle).toHaveBeenCalled()
  })  
})