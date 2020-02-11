import { random, internet } from 'faker'
import { Button, Box, Avatar, ProgressBar, Text } from '@primer/components'
import { RangeValuation } from '../atoms/RangeValuation'
import { ResultComment } from '../atoms/ResultComment'
import { Main } from '../atoms/Main'
import { Wrapper } from '../atoms/Wrapper'
import { ResultRank, ResultRankInner } from '../atoms/ResultRanking'
import {
  RangeInner,
  EditRange,
  EditRangeInput,
  RangeValue,
  Range,
  RangeBar,
  RangeBarThumb
} from '../atoms/Range'
import { Admire } from '../molecules/Admire'
import { AdmireContent as Inner } from '../molecules/AdmireContent'

export default { title: 'pages' }

export const AdmirePage = () => (
  <Wrapper>
    <Main>
      <Box>
        <Box>
          <Admire>
            <Inner>
              <Avatar src={internet.avatar()}></Avatar>
              <Text>{random.word()}</Text>
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
              <Avatar src={internet.avatar()}></Avatar>
              <Text>{random.word()}</Text>
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
    <Main>
      <Box p={4} mt={2}>
        <Avatar src={internet.avatar()}></Avatar>
        <Text>{random.word()}</Text>
      </Box>
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
          <Avatar src={internet.avatar()}></Avatar>
          <Text>{random.word()}</Text>
          <ProgressBar progress={100}></ProgressBar>
        </Box>
        <Box>
          <Avatar src={internet.avatar()}></Avatar>
          <Text>{random.word()}</Text>
          <ProgressBar progress={100}></ProgressBar>
        </Box>
      </Box>
    </Main>
  </Wrapper>
)
