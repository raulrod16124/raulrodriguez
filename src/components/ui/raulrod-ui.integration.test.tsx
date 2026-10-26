import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '@raulrod/ui'
import '@testing-library/jest-dom'

describe('@raulrod/ui integration', () => {
  it('renders a button from the library', () => {
    render(<Button type="button">Get started</Button>)

    expect(
      screen.getByRole('button', { name: 'Get started' })
    ).toBeInTheDocument()
  })
})
