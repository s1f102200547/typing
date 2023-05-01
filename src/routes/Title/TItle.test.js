import {render, screen, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Title from './Title';

it('display correctly', () => {
  render(<Title/>, {wrapper: MemoryRouter})
  expect(screen.getByText("NS-TYPING")).toBeInTheDocument()
  expect(screen.getByText("数学・記号専用のタイピング練習ゲーム")).toBeInTheDocument()
  expect(screen.getByText("プレイする")).toBeInTheDocument()
})
it('Onclick button respond to a click', () => {
  const onPlay = jest.fn()
  render(<Title startPlaying={onPlay}/>, {wrapper: MemoryRouter})
  const startButton = screen.getByText("プレイする")
  fireEvent.click(startButton)
  expect(onPlay).toBeCalled()
})