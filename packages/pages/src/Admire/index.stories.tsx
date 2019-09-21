import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import { Avatar } from '../../a/Avatar'
import { Box, Inner as BoxInner } from '../../a/Box'
import { Main } from '../../a/Main'
import { Nav } from '../../a/Nav'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeInner,
  RangeValue
} from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Name } from '../../a/User'
import { Wrapper } from '../../a/Wrapper'
import { Admire, Inner } from '../../m/Admire'
import { DefaultFixedButton } from '../../m/FixedButton/index.stories'

storiesOf('Pages.Admire', module).add('default', () => (
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
        <DefaultFixedButton />
      </Box>
    </Main>
  </Wrapper>
))
