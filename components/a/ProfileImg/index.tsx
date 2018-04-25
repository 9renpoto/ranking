import styled from 'styled-components'

export const Img = styled.div`
  img {
    border-radius: 0.188rem;
    width: 5rem;
    height: 5rem;
    border: 0.063rem solid #ccc;
  }

  ${(props) =>
    props.circle &&
    `
      border-radius: 50%;

      img {
        border-radius: 50%;
      }
    `};
`
