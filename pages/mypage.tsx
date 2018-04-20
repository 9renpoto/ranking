import { Content, ContentInner } from '../components/a/Content/index'
// import { DefaultHero } from '../components/a/Hero/index.stories'
import { Main } from '../components/a/Main/index'
import { Nav } from '../components/a/Nav/index'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../components/a/Range/index'
// import { DefaultRank } from '../components/a/Ranking/index.stories'
import {
  ResultComment,
  ResultRank,
  ResultRankInner
} from '../components/a/Result/index'
import { Wrapper } from '../components/a/Wrapper/index'

type Props = {
  url: {
    query: {
      id: string
    }
  }
}

export default ({
  url: {
    query: { id }
  }
}: Props) => (
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
      {/* <DefaultHero /> */}
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
)
