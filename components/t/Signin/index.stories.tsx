import { storiesOf } from '@storybook/react'
import React from 'react'
import { Inner as SigninWrapperInner, Wrapper as SigninWrapper } from './'

storiesOf('Templates.Signin', module).add('default', () => (
  <SigninWrapper>
    <SigninWrapperInner />
  </SigninWrapper>
))
