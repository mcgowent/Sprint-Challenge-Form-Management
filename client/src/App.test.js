import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import App from './App'


//Element testing for Render
describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
  it('strike check', () => {
    let clicked = true
    const { getByText } = render(<App ball={() => clicked = true} />)
    const downButton = getByText(/ball/i)
    fireEvent.click(downButton)
    expect(clicked).toBe(true)
  })
})