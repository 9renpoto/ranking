import Octicon, { Person } from '@primer/octicons-react'
import Link from 'next/link'
import { Nav } from '@rate/atoms'

interface Props {
  memberId: string
}

export const Navbar = ({ memberId }: Props) => (
  <Nav>
    <ul>
      <li>
        <Link href={`/mypage/${memberId}`}>
          <a>
            <Octicon icon={Person} />
          </a>
        </Link>
      </li>
    </ul>
  </Nav>
)
