import styled from 'styled-components'

export const Rank = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    margin-right: 1.875rem;
  }

  & + & {
    margin-top: 1rem;
  }
`
