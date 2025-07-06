import { render, screen } from '@testing-library/react'
import RootLayout from './layout'

describe('RootLayout', () => {
  it('renders children without any wrapper', () => {
    const testContent = <div data-testid="test-content">Test Content</div>

    render(<RootLayout>{testContent}</RootLayout>)

    expect(screen.getByTestId('test-content')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('passes through children as-is', () => {
    const multipleChildren = (
      <>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </>
    )

    render(<RootLayout>{multipleChildren}</RootLayout>)

    expect(screen.getByTestId('child-1')).toBeInTheDocument()
    expect(screen.getByTestId('child-2')).toBeInTheDocument()
  })

  it('handles null children gracefully', () => {
    expect(() => render(<RootLayout>{null}</RootLayout>)).not.toThrow()
  })
})
