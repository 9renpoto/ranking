import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Main } from '@rate/atoms'
import { Wrapper, Inner } from '.'

export default { title: 'templates' }
export const SignInDefault = () => (
  <Wrapper>
    <Nav>
      <ul>
        <li>
          <a href="#" className="active">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faEdit} />
          </a>
        </li>
      </ul>
    </Nav>
    <Main />
  </Wrapper>
)
export const SignIn = () => (
  <Wrapper>
    <Inner />
  </Wrapper>
)
