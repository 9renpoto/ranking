import { Avatar, Box, Text } from '@primer/components'
import { internet, random } from 'faker'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValue,
} from '../atoms/Range'
import { RangeValuation } from '../atoms/RangeValuation'
import { ResultComment } from '../atoms/ResultComment'
import { ResultRank, ResultRankInner } from '../atoms/ResultRanking'
import { Admire } from './Admire'
import { AdmireContent } from './AdmireContent'
import AppBarComponent from './AppBar'
import { Rank } from './Ranking'

function DefaultAdmire() {
  return (
    <Admire>
      <AdmireContent>
        <Avatar src={internet.avatar()} />
        <Text>{random.word()}</Text>
      </AdmireContent>
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
  )
}

export default { title: 'molecules' }

export const AppBar = () => <AppBarComponent />

export const Admires = () => (
  <Box>
    <DefaultAdmire />
    <DefaultAdmire />
    <DefaultAdmire />
    <DefaultAdmire />
  </Box>
)

export const Heros = () => (
  <Box>
    <Avatar src={internet.avatar()} />
    <Text>{random.word()}</Text>
  </Box>
)

export const Ranges = () => (
  <Range>
    <RangeInner>
      <RangeValuation>
        <p>{random.word()}</p>
        <p>{random.word()}</p>
      </RangeValuation>
      <RangeBar>
        <RangeBarThumb style={{ left: '50%' }} />
        <RangeValue style={{ left: '50%' }}>3</RangeValue>
      </RangeBar>
    </RangeInner>
  </Range>
)
export const RangeInput = () => (
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
)
export const Ranks = () => (
  <Rank>
    <span>{random.number()}</span>
    <Admire>
      <AdmireContent>
        <Avatar src={internet.avatar()} />
        <Text>{random.word()}</Text>
      </AdmireContent>
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
  </Rank>
)
export const Results = () => (
  <>
    <ResultRank>
      <ResultRankInner>
        <span>50人中</span>
        10位
      </ResultRankInner>
    </ResultRank>
    <ResultComment>{random.word()}</ResultComment>
  </>
)
