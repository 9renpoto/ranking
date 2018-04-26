import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { image, name, random } from 'faker'
import React from 'react'
import Routes from '../app/routes'
import { Button } from '../components/a/Button'
import { Content, Inner as ContentInner } from '../components/a/Content'
import { Main } from '../components/a/Main'
import { Nav } from '../components/a/Nav'
import { Img } from '../components/a/ProfileImg'
import { Name } from '../components/a/ProfileName'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeInner
} from '../components/a/Range'
import { RangeValuation } from '../components/a/RangeValuation'
import { Wrapper } from '../components/a/Wrapper'
import { Admire, Inner } from '../components/m/Admire'
import { Fixed } from '../components/m/FixedButton'

type Props = {
  url: {
    query: {
      orgId: string
      termId: string
    }
  }
}

export default () => (
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
        <Fixed>
          <Button>{random.word()}</Button>
        </Fixed>
      </Content>
    </Main>
  </Wrapper>
)
