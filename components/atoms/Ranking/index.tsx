import styled from 'styled-components'

export const Rank = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    margin-right: 1.875rem;
  }
`

export const RankBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #3ebdaa;
  border-radius: 0.188rem;
  padding: 0.313rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.188rem;
    margin-right: 0.625rem;
  }

  p {
    color: #fff;
    font-size: 0.875rem;
  }
`
