import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../components/a/Button'
import { Input } from '../components/a/Input'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from '../components/p/Signin'

import * as React from 'react'
import initFirebase from '../app/firebase/initialize'
import signinWithGithub from '../app/firebase/signin'
import routes from '../app/routes'

const signIn = () => {
  initFirebase()
  signinWithGithub().then(result => {
    const mypageURL: string = `/gh/org/${result.user.displayName}`
    routes.Router.pushRoute(mypageURL, { photoURL: result.user.photoURL })
  })
}

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
      <Button onClick={signIn}>Sign in</Button>
    </SigninWrapperInner>
  </SigninWrapper>
)
