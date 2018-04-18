import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { image, random } from 'faker'

import { Wrapper } from '.'
import { Content, ContentInner } from '../Content'
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
import { ResultComment, ResultRank, ResultRankInner } from '../Result'
import { Rank, RankBar } from '../Ranking'

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
      <Content col2>
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
          <Rank>
            <span>{random.number()}</span>
            <RankBar style={{ width: '100%' }}>
              <img src={image.imageUrl(300.3)} alt='' />
              <p>name</p>
            </RankBar>
          </Rank>
          <Rank>
            <span>{random.number()}</span>
            <RankBar style={{ width: '100%' }}>
              <img src={image.imageUrl(300.3)} alt='' />
              <p>name</p>
            </RankBar>
          </Rank>
        </ContentInner>
      </Content>
    </Main>
  </Wrapper>
))
