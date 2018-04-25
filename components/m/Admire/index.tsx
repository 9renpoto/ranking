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

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.625rem;
  }

  p {
    font-size: 0.875rem;
  }
`
export const Inner = styled.div`
  display: flex;
  align-items: center;
`
