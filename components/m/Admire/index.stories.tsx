import { storiesOf } from '@storybook/react'
import { image, name, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../../a/Content'
import { Img } from '../../a/ProfileImg'
import { Name } from '../../a/ProfileName'
import { EditRange, EditRangeInput, Range, RangeInner } from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Admire, Inner } from './'

export const DefaultAdmire = () => (
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
    </ContentInner>
  </Content>
)

storiesOf('Molecules.Admire', module).add('default', () => <DefaultAdmire />)
