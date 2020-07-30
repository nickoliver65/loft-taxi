import React from 'react'
import { Login } from './Login.jsx'
import { render } from '@testing-library/react'

describe("Login", () => {
    it("renders correctly", () => {
        const { container } = render(<Login />)
        expect(container.innerHTML).toMatch('Зарегистрироваться')
    })  

    it('labels render correctly', () => {
        const { getByLabelText } = render(<Login />)

        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    })
})
