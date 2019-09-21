import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <FontAwesomeIcon icon={faUser} />
          </a>
        </Link>
      </li>
    </ul>
  </Nav>
)
