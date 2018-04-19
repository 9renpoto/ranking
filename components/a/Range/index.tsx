import styled from 'styled-components'

export const Range = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RangeInner = styled.div`
  width: 100%;
`

export const RangeValuation = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #555;
`

export const RangeBar = styled.div`
  position: relative;
  border-bottom: 0.063rem solid #eb2e3e;
  margin-top: 1.25rem;
  width: 100%;
  height: 0.063rem;

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
`

export const RangeBarThumb = styled.div`
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
`

export const EditRange = styled.div`
  margin-top: 0.5rem;
  position: relative;

  span {
    position: absolute;
    display: block;
    width: 0.188rem;
    height: 0.188rem;
    border-radius: 50%;
    background-color: #eb2e3e;
    top: 75%;
    z-index: 1;

    &:nth-of-type(1) {
      left: 0.2%;
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
      left: 99.9%;
    }
  }
`

export const EditRangeInput = styled.input`
  -webkit-appearance: none;
  background-color: #eb2e3e;
  height: 0.063rem;
  width: 100%;
  padding: 0;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    border: 0.063rem solid #eb2e3e;
    width: 1.563rem;
    height: 1.563rem;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }
  &::-ms-tooltip {
    display: none;
  }
  &::-moz-range-track {
    height: 0;
  }
  &::-moz-range-thumb {
    background-color: #fff;
    width: 1.563rem;
    height: 1.563rem;
    border: 0.063rem solid #eb2e3e;
    border-radius: 50%;
  }
`
