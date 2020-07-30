import React from 'react'
import { Registration } from './Registration.jsx'
import { render } from '@testing-library/react'

describe("Registration", () => {
    it("renders correctly", () => {
        const { container } = render(<Registration />)
        expect(container.innerHTML).toMatch('Регистрация')
    })
})
 