import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { image, random } from 'faker'
import {
  Avatar,
  Box,
  Inner as BoxInner,
  Button,
  Main,
  Nav,
  EditRange,
  EditRangeInput,
  Range,
  RangeInner,
  RangeValue,
  RangeValuation,
  Name,
  Wrapper
} from '@rate/atoms'
import { AdmireContent as Inner, Fixed, Admire } from '@rate/molecules'

export default () => (
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
        </BoxInner>
        <Fixed>
          <Button>{random.word()}</Button>
        </Fixed>
      </Box>
    </Main>
  </Wrapper>
)
