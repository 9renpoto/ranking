import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import {
  Avatar,
  Box,
  Inner as BoxInner,
  EditRange,
  EditRangeInput,
  Range,
  RangeInner,
  RangeValue,
  Name,
  Button,
  Hero,
  RangeBar,
  RangeBarThumb,
  RangeValuation,
  ResultRank,
  ResultRankInner,
  ResultComment
} from '@rate/atoms'
import { Admire, AdmireContent, Fixed, Rank, HeroContent } from './'
import { DefaultRankBar } from '@rate/atoms/src/story'

export const DefaultAdmire = () => (
  <Admire>
    <AdmireContent>
      <Avatar width={2.5} height={2.5}>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Avatar>
      <Name padding={0}>{random.word()}</Name>
    </AdmireContent>
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
)

export const DefaultHero = () => (
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
)

export const DefaultResult = () => (
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

storiesOf('molecules', module)
  .add('Admire', () => (
    <Box fixed>
      <BoxInner fixed>
        <DefaultAdmire />
        <DefaultAdmire />
        <DefaultAdmire />
        <DefaultAdmire />
      </BoxInner>
    </Box>
  ))
  .add('FixedButton', () => (
    <Fixed>
      <Button>{random.word()}</Button>
    </Fixed>
  ))
  .add('Hero', () => <DefaultHero />)
  .add('Range', () => (
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
  ))
  .add('Range/input', () => (
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
  ))
  .add('Rank', () => (
    <Rank>
      <span>{random.number()}</span>
      <DefaultRankBar />
    </Rank>
  ))
  .add('Result', () => <DefaultResult />)
