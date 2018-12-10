import { image, random } from 'faker'
import * as React from 'react'
import { Avatar } from '../components/a/Avatar'
import { Box, Inner as BoxInner } from '../components/a/Box'
import { Hero } from '../components/a/Hero'
import { Main } from '../components/a/Main'
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
import { Name } from '../components/a/User'
import { Wrapper } from '../components/a/Wrapper'
import { Inner as HeroInner } from '../components/m/Hero'
import { Navbar } from '../components/m/Navbar'
import { Rank } from '../components/m/Ranking'

type Props = {
  url: {
    query: {
      orgId: string
      memberId: string
      photoURL: string
    }
  }
}

export default ({
  url: {
    query: { orgId, memberId, photoURL }
  }
}: Props) => (
  <Wrapper>
    <Navbar orgId={orgId} memberId={memberId} />
    <Main>
      <Hero>
        <HeroInner>
          <Avatar isCircle width={4.688} height={4.688}>
            <img src={photoURL} alt={random.word()} />
          </Avatar>
          <Name white padding={1}>
            {memberId}
          </Name>
        </HeroInner>
      </Hero>
      <Box>
        <BoxInner>
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
        </BoxInner>
        <BoxInner>
          <ResultRank>
            <ResultRankInner>
              <span>50人中</span>
              10位
            </ResultRankInner>
          </ResultRank>
          <ResultComment>{random.word()}</ResultComment>
        </BoxInner>
      </Box>
      <Box>
        <BoxInner>
          <Rank>
            <span>{random.number()}</span>
            <RankBar style={{ width: `${random.number({ max: 100 })}%` }}>
              <Avatar width={0.938} height={0.938}>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Avatar>
              <Name white padding={0}>
                {random.word()}
              </Name>
            </RankBar>
          </Rank>
          <Rank>
            <span>{random.number()}</span>
            <RankBar style={{ width: `${random.number({ max: 100 })}%` }}>
              <Avatar width={0.938} height={0.938}>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Avatar>
              <Name white padding={0}>
                {random.word()}
              </Name>
            </RankBar>
          </Rank>
        </BoxInner>
      </Box>
    </Main>
  </Wrapper>
)
