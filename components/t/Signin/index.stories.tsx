import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import { internet, random } from 'faker'
import React, { Children } from 'react'
import { Inner as SigninWrapperInner, Wrapper as SigninWrapper } from './'

storiesOf('Templates.Signin', module).add('default', () => (
  <SigninWrapper>
    <SigninWrapperInner>{Children}</SigninWrapperInner>
  </SigninWrapper>
))
