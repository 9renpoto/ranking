import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
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
  Input
} from '@rate/atoms'
import { Admire, Inner, Fixed } from '@rate/molecules'
import { DefaultHero, DefaultResult } from '@rate/molecules/src/story'
import { DefaultRankBar } from '@rate/atoms/src/story'
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
        <DefaultHero />
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
            <DefaultResult />
          </BoxInner>
        </Box>
        <Box>
          <BoxInner>
            <DefaultRankBar />
            <DefaultRankBar />
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
