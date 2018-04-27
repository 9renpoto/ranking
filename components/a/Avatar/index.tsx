import styled from 'styled-components'

export type Props = {
  isCircle?: boolean
}

export const Avatar = styled.div`
  overflow: hidden;
  border-radius: 0.188rem;
  border: 0.063rem solid #ccc;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  ${(props: Props) =>
    props.isCircle &&
    `
      border-radius: 50%;
    `};
`
