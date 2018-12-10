import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'
import React from 'react'
import firebase from '../app/firebase'
import { Button } from '../components/a/Button'
import { Input } from '../components/a/Input'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from '../components/p/Signin'

const signIn = () => {
  const provier = new firebase.auth.GithubAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provier)
    .then(result => Router.push(`/gh/org/${result.user.displayName}`))
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
