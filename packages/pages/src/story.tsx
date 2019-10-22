import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { image, random } from 'faker'
import {
  Wrapper,
  Nav,
  Main,
  Name,
  RangeInner,
  RangeValuation,
  EditRange,
  EditRangeInput,
  RangeValue,
  Range,
  RangeBar,
  RangeBarThumb,
  Hero,
  ResultRank,
  ResultRankInner,
  ResultComment,
  Bar
} from '@rate/atoms'
import { Admire, AdmireContent as Inner, HeroContent } from '@rate/molecules'
import { Button, Box, Avatar } from '@primer/components'

export default { title: 'pages' }

export const AdmirePage = () => (
  <Wrapper>
    <Nav>
      <ul>
        <li>
          <a href='#' className='active'>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faEdit} />
          </a>
        </li>
      </ul>
    </Nav>
    <Main>
      <Box>
        <Box>
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
                  <EditRangeInput type='range' step='25' />
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
                  <EditRangeInput type='range' step='25' />
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
                  <EditRangeInput type='range' step='25' />
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
                  <EditRangeInput type='range' step='25' />
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
                  <EditRangeInput type='range' step='25' />
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
                  <EditRangeInput type='range' step='25' />
                  <RangeValue style={{ left: '50%' }}>3</RangeValue>
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
        </Box>
        <Button>{random.word()}</Button>
      </Box>
    </Main>
  </Wrapper>
)

export const Mypage = () => (
  <Wrapper>
    <Nav>
      <ul>
        <li>
          <a href='#' className='active'>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faEdit} />
          </a>
        </li>
      </ul>
    </Nav>
    <Main>
      <Hero>
        <HeroContent>
          <Avatar width={4.688} height={4.688}>
            <img src={image.imageUrl(300, 300)} alt={random.word()} />
          </Avatar>
          <Name white padding={1}>
            {random.word()}
          </Name>
        </HeroContent>
      </Hero>
      <Box>
        <Box>
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
        </Box>
        <Box>
          <ResultRank>
            <ResultRankInner>
              <span>50人中</span>
              10位
            </ResultRankInner>
          </ResultRank>
          <ResultComment>{random.word()}</ResultComment>
        </Box>
      </Box>
      <Box>
        <Box>
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
        </Box>
      </Box>
    </Main>
  </Wrapper>
)
