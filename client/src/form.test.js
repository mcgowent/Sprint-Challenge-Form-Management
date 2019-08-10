import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import Form from './Form'
import { sumOfTwoNum } from './Form'

describe('<Form/>', () => {
    it('renders without crashing', () => {
        render(<Form />)
    })


})
describe('subtract()', () => {
    it('Test my adding function', () => {
        expect(sumOfTwoNum(10, 1)).toBe(11)
        expect(sumOfTwoNum(12, 13)).toBe(25)
        expect(sumOfTwoNum(-12, 12)).toBe(0)
    })
})