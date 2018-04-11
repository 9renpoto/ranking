import styled from "styled-components";

const ResultRank = styled.div`
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
`;

const ResultRankInner = styled.div`
  text-align: center;

   span {
    display: block;
    font-size: 0.625rem;
    font-weight: normal;
    margin-bottom: 0.313rem;
  }
`;

const RangeValuation = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #555;
`;

const RangeBar = styled.div`
  position: relative;
  border-bottom: 0.063rem solid #eb2e3e;
  margin-top: 1.25rem;
  width: 100%;
  height: 0.063rem;

  .mypage-RangeBar_Thumb {
    position: absolute;
    border: 0.063rem solid #eb2e3e;
    width: 1.563rem;
    height: 1.563rem;
    border-radius: 50%;
    top: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    z-index: 2;
    box-sizing: border-box;
  }

  span {
    position: absolute;
    display: block;
    width: 0.188rem;
    height: 0.188rem;
    border-radius: 50%;
    background-color: #eb2e3e;
    top: 0;
    z-index: 1;

    &:nth-of-type(1) {
      left: 0;
    }

    &:nth-of-type(2) {
      left: 25%;
    }

    &:nth-of-type(3) {
      left: 50%;
    }

    &:nth-of-type(4) {
      left: 75%;
    }

    &:nth-of-type(5) {
      left: 100%;
    }
  }

`;

export default Range;
