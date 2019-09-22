import {
  faEdit,
  faUser,
  faEnvelope,
  faUnlock
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import { image, random, internet } from 'faker'
import {
  Wrapper,
  Nav,
  Main,
  Box,
  Inner as BoxInner,
  Avatar,
  Name,
  RangeInner,
  RangeValuation,
  EditRange,
  EditRangeInput,
  RangeValue,
  Button,
  Range,
  RangeBar,
  RangeBarThumb,
  Input,
  Hero,
  ResultRank,
  ResultRankInner,
  ResultComment,
  Bar
} from '@rate/atoms'
import {
  Admire,
  AdmireContent as Inner,
  Fixed,
  HeroContent
} from '@rate/molecules'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from './'

storiesOf('pages', module)
  .add('Admire', () => (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <a href="#" className="active">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </li>
        </ul>
      </Nav>
      <Main>
        <Box fixed>
          <BoxInner fixed>
            <Admire>
              <Inner>
                <Avatar width={2.5} height={2.5}>
                  <img src={image.imageUrl(300, 300)} alt={random.word()} />
                </Avatar>
                <Name padding={0}>{random.word()}</Name>
              </Inner>
              <Range>
                <RangeInner>
                  <RangeValuation>
                    <p>{random.word()}</p>
                    <p>{random.word()}</p>
                  </RangeValuation>
                  <EditRange>
                    <EditRangeInput type="range" step="25" />
                    <RangeValue style={{ left: '50%' }}>3</RangeValue>
                  </EditRange>
                </RangeInner>
              </Range>
            </Admire>
            <Admire>
              <Inner>
                <Avatar width={2.5} height={2.5}>
                  <img src={image.imageUrl(300, 300)} alt={random.word()} />
                </Avatar>
                <Name>{random.word()}</Name>
              </Inner>
              <Range>
                <RangeInner>
                  <RangeValuation>
                    <p>{random.word()}</p>
                    <p>{random.word()}</p>
                  </RangeValuation>
                  <EditRange>
                    <EditRangeInput type="range" step="25" />
                    <RangeValue style={{ left: '50%' }}>3</RangeValue>
                  </EditRange>
                </RangeInner>
              </Range>
            </Admire>
            <Admire>
              <Inner>
                <Avatar width={2.5} height={2.5}>
                  <img src={image.imageUrl(300, 300)} alt={random.word()} />
                </Avatar>
                <Name>{random.word()}</Name>
              </Inner>
              <Range>
                <RangeInner>
                  <RangeValuation>
                    <p>{random.word()}</p>
                    <p>{random.word()}</p>
                  </RangeValuation>
                  <EditRange>
                    <EditRangeInput type="range" step="25" />
                    <RangeValue style={{ left: '50%' }}>3</RangeValue>
                  </EditRange>
                </RangeInner>
              </Range>
            </Admire>
            <Admire>
              <Inner>
                <Avatar width={2.5} height={2.5}>
                  <img src={image.imageUrl(300, 300)} alt={random.word()} />
                </Avatar>
                <Name>{random.word()}</Name>
              </Inner>
              <Range>
                <RangeInner>
                  <RangeValuation>
                    <p>{random.word()}</p>
                    <p>{random.word()}</p>
                  </RangeValuation>
                  <EditRange>
                    <EditRangeInput type="range" step="25" />
                    <RangeValue style={{ left: '50%' }}>3</RangeValue>
                  </EditRange>
                </RangeInner>
              </Range>
            </Admire>
            <Admire>
              <Inner>
                <Avatar width={2.5} height={2.5}>
                  <img src={image.imageUrl(300, 300)} alt={random.word()} />
                </Avatar>
                <Name>{random.word()}</Name>
              </Inner>
              <Range>
                <RangeInner>
                  <RangeValuation>
                    <p>{random.word()}</p>
                    <p>{random.word()}</p>
                  </RangeValuation>
                  <EditRange>
                    <EditRangeInput type="range" step="25" />
                    <RangeValue style={{ left: '50%' }}>3</RangeValue>
                  </EditRange>
                </RangeInner>
              </Range>
            </Admire>
            <Admire>
              <Inner>
                <Avatar width={2.5} height={2.5}>
                  <img src={image.imageUrl(300, 300)} alt={random.word()} />
                </Avatar>
                <Name>{random.word()}</Name>
              </Inner>
              <Range>
                <RangeInner>
                  <RangeValuation>
                    <p>{random.word()}</p>
                    <p>{random.word()}</p>
                  </RangeValuation>
                  <EditRange>
                    <EditRangeInput type="range" step="25" />
                    <RangeValue style={{ left: '50%' }}>3</RangeValue>
                  </EditRange>
                </RangeInner>
              </Range>
            </Admire>
          </BoxInner>
          <Fixed>
            <Button>{random.word()}</Button>
          </Fixed>
        </Box>
      </Main>
    </Wrapper>
  ))
  .add('Mypage', () => (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <a href="#" className="active">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </li>
        </ul>
      </Nav>
      <Main>
        <Hero>
          <HeroContent>
            <Avatar isCircle width={4.688} height={4.688}>
              <img src={image.imageUrl(300, 300)} alt={random.word()} />
            </Avatar>
            <Name white padding={1}>
              {random.word()}
            </Name>
          </HeroContent>
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
            <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
              <Avatar width={0.938} height={0.938}>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Avatar>
              <Name white padding={0}>
                {random.word()}
              </Name>
            </Bar>
            <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
              <Avatar width={0.938} height={0.938}>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Avatar>
              <Name white padding={0}>
                {random.word()}
              </Name>
            </Bar>
          </BoxInner>
        </Box>
      </Main>
    </Wrapper>
  ))
  .add('Signin', () => (
    <SigninWrapper>
      <SigninWrapperInner>
        <form action="#" method="post">
          <SigninWrapperInput>
            <Input type="email" placeholder={internet.email()} />
            <FontAwesomeIcon icon={faEnvelope} />
          </SigninWrapperInput>
          <SigninWrapperInput>
            <Input type="password" placeholder={random.word()} />
            <FontAwesomeIcon icon={faUnlock} />
          </SigninWrapperInput>
          <Button disabled>Sign in</Button>
        </form>
      </SigninWrapperInner>
    </SigninWrapper>
  ))
