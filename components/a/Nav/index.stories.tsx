import { faEdit, faUser } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Nav } from '.'

storiesOf('Atoms.Nav', module).add('default', () => (
  <Nav>
    <ul>
      <li>
        <a href='mypage.html' className='active'>
          <FontAwesomeIcon Icon={faUser} />
        </a>
      </li>
      <li>
        <a href='edit.html'>
          <FontAwesomeIcon Icon={faEdit} />
        </a>
      </li>
    </ul>
  </Nav>
))
