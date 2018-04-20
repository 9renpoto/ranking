import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import * as React from 'react'

import { Img, Inner, Name } from '.'

export const DefaultProfile = () => (
  <React.Fragment>
    <Inner>
      <Img>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Img>
      <Name>{random.word()}</Name>
    </Inner>
  </React.Fragment>
)

storiesOf('Atoms.Profile', module).add('default', () => (
  <div
    style={{
      'background-color': '#1111',
      height: '7.5rem',
      position: 'relative'
    }}
  >
    <DefaultProfile />
  </div>
))
