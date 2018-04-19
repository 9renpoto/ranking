import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import * as React from 'react'

import { Img, Name } from '.'

export const DefaultProfile = () => (
  <React.Fragment>
    <Img>
      <img src={image.imageUrl(300, 300)} alt={random.word()} />
    </Img>
    <Name>{random.word()}</Name>
  </React.Fragment>
)

storiesOf('Atoms.Profile', module).add('default', () => (
  <div style={{ 'background-color': '#1111' }}>
    <DefaultProfile />
  </div>
))
