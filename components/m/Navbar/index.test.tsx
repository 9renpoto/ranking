import React from 'react'
import { create } from 'react-test-renderer'

import { Navbar } from '.'

jest.mock('../../../app/routes')

describe('Molecules.Navbar', () => {
  it('render', () => {
    const tree = create(<Navbar />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
