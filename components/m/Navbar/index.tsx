import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Routes from '../../../app/routes'
import { Nav } from '../../a/Nav'

export type Props = {
  orgId: string
  memberId: string
}

export const Navbar = (props: Props) => (
  <Nav>
    <ul>
      <li>
        <Routes.Link route='mypage' params={props}>
          <a>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </Routes.Link>
      </li>
    </ul>
  </Nav>
)
