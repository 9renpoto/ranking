import styled from 'styled-components'

export const SigninWrapper = styled.div`
  background: #3ebdaa;
  background: linear-gradient(
    90deg,
    rgba(62, 189, 170, 0.6),
    rgba(63, 162, 252, 0.6)
  );
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SigninWrapperInner = styled.main`
  background-color: #fff;
  padding: 3rem;
  width: 24rem;
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.1);
  button {
    margin-top: 3.75rem;
  }
`

export const SigninWrapperInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border-bottom: 0.063rem solid #ccc;
  color: #ccc;

  & + & {
    margin-top: 1.5rem;
  }

  input {
    margin-left: .5rem;
  }

  input:valid + svg {
    color: #3ebdaa;
  }
`
