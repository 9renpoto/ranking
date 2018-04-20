import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../components/a/Button'
import { Input } from '../components/a/Input'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from '../components/a/SigninWrapper'

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
        <Button disabled>Sign in</Button>
      </form>
    </SigninWrapperInner>
  </SigninWrapper>
)
