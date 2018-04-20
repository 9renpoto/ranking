import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { Navbar } from '.'

const renderer = createRenderer()

jest.mock('../../../app/routes')

describe('Molecules.Navbar', () => {
  it('render', () => {
    const tree = renderer.render(<Navbar />)
    expect(tree).toMatchSnapshot()
  })
})
