import { render } from '@redwoodjs/testing'

import TopBar from './TopBar'

describe('TopBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopBar />)
    }).not.toThrow()
  })
})
