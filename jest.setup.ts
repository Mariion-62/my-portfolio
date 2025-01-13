import '@testing-library/jest-dom'
import { RenderOptions, RenderResult, render } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import React from 'react'

export function setup(jsx: React.ReactNode, args: RenderOptions): RenderResult & { user: UserEvent } {
  return {
    user: userEvent.setup(),
    ...render(jsx, args)
  }
}
