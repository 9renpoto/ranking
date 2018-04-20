import { image, name, random } from 'faker'
import { Content, ContentInner } from '../components/a/Content/index'
import { Hero, Inner as HeroInner } from '../components/a/Hero'
import { Main } from '../components/a/Main/index'
import { Nav } from '../components/a/Nav/index'
import { Img as ProfileImg, Name as ProfileName } from '../components/a/Profile'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../components/a/Range/index'
import { Bar as RankBar, Rank } from '../components/a/Ranking'
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
      <Hero>
        <HeroInner>
          <ProfileImg>
            <img src={image.imageUrl(300, 300)} alt={random.word()} />
          </ProfileImg>
          <ProfileName>{id}</ProfileName>
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
