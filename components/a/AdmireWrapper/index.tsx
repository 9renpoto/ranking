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
