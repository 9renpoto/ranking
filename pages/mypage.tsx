import { image, name, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../components/a/Content'
import { Hero } from '../components/a/Hero'
import { Main } from '../components/a/Main'
import { Img as ProfileImg } from '../components/a/ProfileImg'
import { Name as ProfileName } from '../components/a/ProfileName'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation,
  RangeValue
} from '../components/a/Range'
import { Bar as RankBar } from '../components/a/Ranking'
import { ResultComment } from '../components/a/ResultComment'
import { ResultRank, ResultRankInner } from '../components/a/ResultRanking'
import { Wrapper } from '../components/a/Wrapper'
import { Inner as HeroInner } from '../components/m/Hero'
import { Navbar } from '../components/m/Navbar'
import { Rank } from '../components/m/Ranking'

type Props = {
  url: {
    query: {
      orgId: string
      memberId: string
    }
  }
}

export default ({
  url: {
    query: { orgId, memberId }
  }
}: Props) => (
  <Wrapper>
    <Navbar orgId={orgId} memberId={memberId} />
    <Main>
      <Hero>
        <HeroInner>
          <ProfileImg>
            <img src={image.imageUrl(300, 300)} alt={random.word()} />
          </ProfileImg>
          <ProfileName>{memberId}</ProfileName>
        </HeroInner>
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
                <RangeValue style={{ left: '50%' }}>3</RangeValue>
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
