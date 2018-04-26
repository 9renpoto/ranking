import { image, name, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../components/a/Content'
import { Hero } from '../components/a/Hero'
import { Main } from '../components/a/Main'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../components/a/Range'
import { Wrapper } from '../components/a/Wrapper'
import { DefaultHero } from '../components/m/Hero/index.stories'
import { Navbar } from '../components/m/Navbar'
import { DefaultRank } from '../components/m/Ranking/index.stories'
import { DefaultResult } from '../components/m/Result/index.stories'

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
)
