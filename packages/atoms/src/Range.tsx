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

export const RangeBar = styled.div`
  position: relative;
  border-bottom: 0.063rem solid #eb2e3e;
  margin-top: 1.25rem;
  width: 100%;
  height: 0.063rem;
  box-sizing: border-box;
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

export const RangeValue = styled.span`
  position: absolute;
  top: 85%;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-size: 0.75rem;
  color: #777;
`

export const EditRange = styled.div`
  margin-top: 0.5rem;
  position: relative;
`

export const EditRangeInput = styled.input`
  appearance: none;
  background-color: #eb2e3e;
  height: 0.063rem;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &::-webkit-slider-thumb {
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

  ::-moz-focus-outer {
    border: 0;
  }

  &::-moz-range-track {
    height: 0;
  }

  &::-moz-range-thumb {
    appearance: none;
    background-color: #fff;
    width: 1.563rem;
    height: 1.563rem;
    border: 0.063rem solid #eb2e3e;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }
`
