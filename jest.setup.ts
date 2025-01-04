import '@testing-library/jest-dom'
import { RenderOptions, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
export function setup(jsx: React.ReactNode, args: RenderOptions) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx, args)
  }
}
