import { render } from '@redwoodjs/testing'

import NavbarContainer from './NavbarContainer'

describe('NavbarContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavbarContainer />)
    }).not.toThrow()
  })
})
