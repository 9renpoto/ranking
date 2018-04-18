import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Wrapper } from '.'
import { Content } from '../Content'
import { Hero, HeroInner } from '../Hero'
import { Main } from '../Main'
import { Nav } from '../Nav'
import { ProfileImg, ProfileName } from '../Profile'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../Range'

storiesOf('Wrapper', module).add('default', () => (
  <Wrapper>
    <Nav>
      <ul>
        <li>
          <a href='mypage.html' className='active'>
            <i className='fas fa-user' />
          </a>
        </li>
        <li>
          <a href='edit.html'>
            <i className='fas fa-edit' />
          </a>
        </li>
      </ul>
    </Nav>
    <Main>
      <Hero>
        <HeroInner>
          <ProfileImg>
            <img src='https://dummyimage.com/300x300/000/fff' alt='' />
          </ProfileImg>
          <ProfileName>name</ProfileName>
        </HeroInner>
      </Hero>
      <Content>
        <Range>
          <RangeInner>
            <RangeValuation>
              <p>とても悪い</p>
              <p>とても良い</p>
            </RangeValuation>
            <RangeBar>
              <RangeBarThumb style={{ left: '50%' }} />
              <span />
              <span />
              <span />
              <span />
              <span />
            </RangeBar>
          </RangeInner>
        </Range>
      </Content>
    </Main>
  </Wrapper>
))
