import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Content, Inner as ContentInner } from '../../a/Content'
import { Main } from '../../a/Main'
import { Nav } from '../../a/Nav'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValue
} from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Wrapper } from '../../a/Wrapper'
import { DefaultHero } from '../../m/Hero/index.stories'
import { DefaultRank } from '../../m/Ranking/index.stories'
import { DefaultResult } from '../../m/Result/index.stories'

storiesOf('Mypage', module).add('default', () => (
  <Wrapper>
    <Nav>
      <ul>
        <li>
          <a href='#' className='active'>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faEdit} />
          </a>
        </li>
      </ul>
    </Nav>
    <Main>
      <DefaultHero />
      <Content>
        <ContentInner>
          <Range>
            <RangeInner>
              <RangeValuation>
                <p>とても悪い</p>
                <p>とても良い</p>
              </RangeValuation>
              <RangeBar>
                <RangeBarThumb style={{ left: '50%' }} />
                <RangeValue style={{ left: '50%' }}>3</RangeValue>
              </RangeBar>
            </RangeInner>
          </Range>
        </ContentInner>
        <ContentInner>
          <DefaultResult />
        </ContentInner>
      </Content>
      <Content>
        <ContentInner>
          <DefaultRank />
          <DefaultRank />
        </ContentInner>
      </Content>
    </Main>
  </Wrapper>
))
