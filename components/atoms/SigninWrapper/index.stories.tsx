import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SigninWrapper, SigninWrapperInner, SigninWrapperInput } from '.'
import { Button } from '../Button'

storiesOf('Signin', module).add('default', () =>
  <SigninWrapper>
    <SigninWrapperInner>
      <form action="/posts" method="post" data-validate>
        <SigninWrapperInput>
          <input type="email" placeholder="example@example" required />
          <i class="fas fa-envelope icon"></i>
        </SigninWrapperInput>
        <SigninWrapperInput>
          <input type="password" placeholder="password" required />
          <i class="fas fa-unlock icon"></i>
        </div>
        <Button>Sign In</Button>
      </SigninWrapperInput>
    </SigninWrapperInner>
  </SigninWrapper>
)
