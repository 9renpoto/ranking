import styled from 'styled-components'

export const Admire = styled.div`
  display: flex;
  padding: 1.25rem;

  > * {
    width: 50%;
  }

  & + & {
    border-top: 1px solid #ccc;
  }
`

export const Name = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.188rem;
    margin-right: 0.625rem;
    border: 0.063rem solid #ccc;
  }

  p {
    font-size: 0.875rem;
  }
`
