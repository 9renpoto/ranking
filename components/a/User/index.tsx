import styled from 'styled-components'

export const Name = styled.p`
  margin-left: 0.5rem;
  padding-top: ${(props) => props.padding}rem;

  ${(props) =>
    props.white &&
    `
      color: #fff;
    `};
`
