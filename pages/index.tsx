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
import initialize from '../app/firebase/initialize'
import signinWithGithub from '../app/firebase/signin'
import routes from '../app/routes'

export default class Index extends React.Component {
  render () {
    return (
      <SigninWrapper>
        <SigninWrapperInner>
          <SigninWrapperInput>
            <Input type='email' placeholder={'email'} />
            <FontAwesomeIcon icon={faEnvelope} />
          </SigninWrapperInput>
          <SigninWrapperInput>
            <Input type='password' placeholder={'password'} />
            <FontAwesomeIcon icon={faUnlock} />
          </SigninWrapperInput>
          <Button onClick={this.onClick}>Sign in</Button>
        </SigninWrapperInner>
      </SigninWrapper>
    )
  }

  onClick () {
    signinWithGithub().then(result => {
      routes.Router.pushRoute(`/gh/org/${result.user.displayName}`, {
        photoURL: result.user.photoURL
      })
    })
  }

  componentDidMount () {
    initialize()
  }
}
