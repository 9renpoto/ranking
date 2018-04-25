import { image, name, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../components/a/Content'
import { Hero } from '../components/a/Hero'
import { Main } from '../components/a/Main'
import {
  Img as ProfileImg,
  Inner as ProfileInner,
  Name as ProfileName
} from '../components/a/Profile'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../components/a/Range'
import { Bar as RankBar, Rank } from '../components/a/Ranking'
import {
  ResultComment,
  ResultRank,
  ResultRankInner
} from '../components/a/Result'
import { Wrapper } from '../components/a/Wrapper'
import { Navbar } from '../components/m/Navbar'

type Props = {
  url: {
    query: {
      orgId: string
      memberId: string
    }
  }
}

export default ({ url: { query } }: Props) => (
  <Wrapper>
    <Navbar {...query} />
    <Main>
      <Hero>
        <ProfileInner>
          <ProfileImg>
            <img src={image.imageUrl(300, 300)} alt={random.word()} />
          </ProfileImg>
          <ProfileName>{query.memberId}</ProfileName>
        </ProfileInner>
      </Hero>
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
          <ResultRank>
            <ResultRankInner>
              <span>50人中</span>
              10位
            </ResultRankInner>
          </ResultRank>
          <ResultComment>{random.word()}</ResultComment>
        </ContentInner>
      </Content>
      <Content>
        <ContentInner>
          <Rank>
            <span>{random.number()}</span>
            <RankBar style={{ width: `${random.number({ max: 100 })}%` }}>
              <img src={image.imageUrl(300, 300)} alt={random.word()} />
              <p>{name.firstName()}</p>
            </RankBar>
          </Rank>
          <Rank>
            <span>{random.number()}</span>
            <RankBar style={{ width: `${random.number({ max: 100 })}%` }}>
              <img src={image.imageUrl(300, 300)} alt={random.word()} />
              <p>{name.firstName()}</p>
            </RankBar>
          </Rank>
        </ContentInner>
      </Content>
    </Main>
  </Wrapper>
)
