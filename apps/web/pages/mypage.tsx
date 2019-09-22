import { image, random } from 'faker'
import {
  Avatar,
  Box,
  Inner as BoxInner,
  Hero,
  Main,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation,
  RangeValue,
  Bar as RankBar,
  ResultComment,
  ResultRank,
  ResultRankInner,
  Name,
  Wrapper
} from '@rate/atoms'
import { HeroContent as HeroInner, Navbar, Rank } from '@rate/molecules'

type Props = {
  url: {
    query: {
      memberId: string
      photoURL: string
    }
  }
}

export default ({
  url: {
    query: { memberId, photoURL }
  }
}: Props) => (
  <Wrapper>
    <Navbar memberId={memberId} />
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
