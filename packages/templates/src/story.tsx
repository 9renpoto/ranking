import Octicon, { Person, Pencil } from '@primer/octicons-react'
import { Nav, Main } from '@rate/atoms'
import { Wrapper, Inner } from '.'

export default { title: 'templates' }
export const SignInDefault = () => (
  <Wrapper>
    <Nav>
      <ul>
        <li>
          <a href='#' className='active'>
            <Octicon icon={Person} />
          </a>
        </li>
        <li>
          <a href='#'>
            <Octicon icon={Pencil} />
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
