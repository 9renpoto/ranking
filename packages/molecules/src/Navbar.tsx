import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../../a/Nav'

export type Props = {
  memberId: string
}

export const Navbar = ({ memberId }: Props) => (
  <Nav>
    <ul>
      <li>
        <Link href={`/mypage/${memberId}`}>
          <a>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </Link>
      </li>
    </ul>
  </Nav>
)
