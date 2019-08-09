import React from 'react'
import "@testing-library/react/cleanup-after-each"
import { render } from '@testing-library/react'

import App from './App'


//Element testing for Render
describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})