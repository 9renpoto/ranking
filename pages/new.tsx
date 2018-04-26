import { image, name, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../components/a/Content'
import { Hero } from '../components/a/Hero'
import { Main } from '../components/a/Main'
import { Img as ProfileImg } from '../components/a/ProfileImg'
import { Name as ProfileName } from '../components/a/ProfileName'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner
} from '../components/a/Range'
import { Inner as HeroInner } from '../components/m/Hero'

import { RangeValuation } from '../components/a/RangeValuation'

import { Bar } from '../components/a/Ranking'
import { ResultComment } from '../components/a/ResultComment'
import { ResultRank, ResultRankInner } from '../components/a/ResultRanking'
import { Wrapper } from '../components/a/Wrapper'
import { Navbar } from '../components/m/Navbar'
import { Rank } from '../components/m/Ranking'

type Props = {
  url: {
    query: {
      orgId: string
      termId: string
    }
  }
}

export default ({ url: { query } }: Props) => <Wrapper />
