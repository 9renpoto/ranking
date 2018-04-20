import { faUser } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Routes from '../../../app/routes'
import { Nav } from '../../a/Nav'

export const Navbar = () => (
  <Nav>
    <ul>
      <li>
        <Routes.Link route='mypage'>
          <FontAwesomeIcon Icon={faUser} />
        </Routes.Link>
      </li>
    </ul>
  </Nav>
)
