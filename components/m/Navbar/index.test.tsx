import { random } from 'faker'
import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { Navbar } from '.'

describe('Molecules.Navbar', () => {
  const renderer = createRenderer()
  it('render', () => {
    const tree = renderer.render(
      <Navbar orgId={random.uuid()} memberId={random.uuid()} />
    )
    expect(tree).toMatchSnapshot()
  })
})
