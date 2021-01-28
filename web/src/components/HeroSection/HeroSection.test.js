import { render } from '@redwoodjs/testing'

import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeroSection />)
    }).not.toThrow()
  })
})
