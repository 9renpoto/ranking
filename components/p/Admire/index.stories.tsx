import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../../a/Content'
import { Main } from '../../a/Main'
import { Nav } from '../../a/Nav'
import { Img } from '../../a/ProfileImg'
import { Name } from '../../a/ProfileName'
import { EditRange, EditRangeInput, Range, RangeInner } from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Wrapper } from '../../a/Wrapper'
import { Admire, Inner } from '../../m/Admire'
import { DefaultFixedButton } from '../../m/FixedButton/index.stories'

storiesOf('Admire', module).add('default', () => (
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
      <Content fixed>
        <ContentInner fixed>
          <Admire>
            <Inner>
              <Img>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Img>
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
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
          <Admire>
            <Inner>
              <Img>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Img>
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
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
          <Admire>
            <Inner>
              <Img>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Img>
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
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
          <Admire>
            <Inner>
              <Img>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Img>
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
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
          <Admire>
            <Inner>
              <Img>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Img>
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
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
          <Admire>
            <Inner>
              <Img>
                <img src={image.imageUrl(300, 300)} alt={random.word()} />
              </Img>
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
                </EditRange>
              </RangeInner>
            </Range>
          </Admire>
        </ContentInner>
        <DefaultFixedButton />
      </Content>
    </Main>
  </Wrapper>
))
