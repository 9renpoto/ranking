import styled from 'styled-components'

export type Props = {
  '2col': string;
}

const Content = styled.div`
  margin: 0 2rem;

  > div {
    padding: 1.875rem 1.25rem;
    background-color: #fff;
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.12);
  }

  + [class^="mypage-Content"] {
    margin-top: 0.625rem;
  }

  ${(props: Props) =>
    props['2col'] &&
    `
    display: flex;

    > div {
      width: 50%;
    }

    > div + div {
      margin-left: 0.625rem;
    }
  `};
`

export default Content
