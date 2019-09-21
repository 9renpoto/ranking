import styled from 'styled-components'

interface Props {
  width: number
  height: number
  isCircle?: boolean
}

export const Avatar = styled.div`
  overflow: hidden;
  border-radius: 0.188rem;
  border: 0.063rem solid #ccc;
  width: ${(props: Props) => props.width}rem;
  height: ${(props: Props) => props.height}rem;

  ${(props: Props) =>
    props.isCircle &&
    `
      border-radius: 50%;
    `};
`
