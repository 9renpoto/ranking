import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import { Wrapper } from '.'
import { Content, ContentInner } from '../Content'
import { DefaultHero } from '../Hero/index.stories'
import { Main } from '../Main'
import { Nav } from '../Nav'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../Range'
import { DefaultRank } from '../Ranking/index.stories'
import { ResultComment, ResultRank, ResultRankInner } from '../Result'

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
                <span />
                <span />
                <span />
                <span />
                <span />
              </RangeBar>
            </RangeInner>
          </Range>
        </ContentInner>
        <ContentInner>
          <React.Fragment>
            <ResultRank>
              <ResultRankInner>
                <span>50人中</span>
                10位
              </ResultRankInner>
            </ResultRank>
            <ResultComment>{random.word()}</ResultComment>
          </React.Fragment>
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
