import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Nav } from '.'

storiesOf('Atoms.Nav', module).add('default', () =>
  <Nav>
    <ul>
      <li><a href="mypage.html" class="active"><i class="fas fa-user"></i></a></li>
      <li><a href="edit.html"><i class="fas fa-edit"></i></a></li>
    </ul>
  </Nav>
)
