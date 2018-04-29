import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Box, Inner as BoxInner } from '../../a/Box'
import { Main } from '../../a/Main'
import { Nav } from '../../a/Nav'
import {
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValue
} from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Wrapper } from '../../a/Wrapper'
import { DefaultHero } from '../../m/Hero/index.stories'
import { DefaultRank } from '../../m/Ranking/index.stories'
import { DefaultResult } from '../../m/Result/index.stories'

storiesOf('Pages.Mypage', module).add('default', () => (
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
          <DefaultRank />
          <DefaultRank />
        </BoxInner>
      </Box>
    </Main>
  </Wrapper>
))
