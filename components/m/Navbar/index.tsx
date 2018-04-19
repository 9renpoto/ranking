import { faUser } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Link } from '../../../app/routes'
import { Nav } from '../../a/Nav'

export const Navbar = () => (
  <Nav>
    <ul>
      <li>
        <Link route='mypage'>
          <FontAwesomeIcon Icon={faUser} />
        </Link>
      </li>
    </ul>
  </Nav>
)
