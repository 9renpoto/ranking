import styled from 'styled-components'

export const ResultRank = styled.div`
  margin: 0 auto;
  color: #3fa2fc;
  font-size: 1.563rem;
  font-weight: bold;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 0.188rem solid #3fa2fc;
  border-radius: 50%;
`

export const ResultRankInner = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 0.625rem;
    font-weight: normal;
    margin-bottom: 0.313rem;
  }
`
export const ResultComment = styled.p`
  margin-top: 0.938rem;
  font-size: 0.875rem;
  line-height: 1.4;
`
