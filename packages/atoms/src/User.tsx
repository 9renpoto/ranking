import styled from 'styled-components'

interface Props {
  white?: boolean
  padding?: number
}

export const Name = styled.p`
  margin-left: 0.5rem;
  padding-top: ${(props: Props) => props.padding}rem;
  ${(props: Props) =>
    props.white &&
    `
      color: #fff;
    `};
`
