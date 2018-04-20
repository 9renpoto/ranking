import { random } from 'faker'
import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { Navbar } from '.'

describe('Molecules.Navbar', () => {
  const renderer = createRenderer()
  it('render', () => {
    const tree = renderer.render(<Navbar id={random.uuid()} />)
    expect(tree).toMatchSnapshot()
  })
})
