import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders learn react link', () => {
  render(<App />)
  const textElement = screen.getByText(/Welcome to Image Framer!/i)
  expect(textElement).toBeInTheDocument()
})
