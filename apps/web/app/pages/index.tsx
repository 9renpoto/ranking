import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from '@rate/atoms'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from '@rate/pages'
import { Button } from '@primer/components'

export default () => (
  <SigninWrapper>
    <SigninWrapperInner>
      <form action='#' method='post'>
        <SigninWrapperInput>
          <Input type='email' placeholder={'email'} />
          <FontAwesomeIcon icon={faEnvelope} />
        </SigninWrapperInput>
        <SigninWrapperInput>
          <Input type='password' placeholder={'password'} />
          <FontAwesomeIcon icon={faUnlock} />
        </SigninWrapperInput>
      </form>
      <Button>Sign in</Button>
    </SigninWrapperInner>
  </SigninWrapper>
)
