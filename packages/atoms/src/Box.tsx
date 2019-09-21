import React, { Children } from 'react'
import styled from 'styled-components'

export type Props = {
  children?: React.ReactNode
  fixed?: boolean
}

export const Box = styled.div`
  margin: 0 2rem;

  * + & {
    margin: 0.625rem 2rem 0;
  }

  ${(props: Props) =>
    Children.count(props.children) === 2 &&
    `
    display: flex;

    > * {
      width: 50%;
    }

    > * + * {
      margin-left: 0.625rem;
    }

    @media (max-width: 48rem) {
      display: block;

      > * {
        width: 100%;
        box-sizing: border-box;

        + * {
          margin-left: 0;
          margin-top: .625rem;
        }
      }
    }
  `};

  ${props =>
    props.fixed &&
    `
      height: 100%;
      padding: 2rem;
      box-sizing: border-box;
      position: relative;
    `};
`

export const Inner = styled.div`
  padding: 1.875rem 1.25rem;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.12);

  ${(props: { fixed?: boolean }) =>
    props.fixed &&
    `
      padding: 0 1.25rem 4.5rem;
      height: 100%;
      width: 100%;
      overflow: scroll;
      box-sizing: border-box;
    `};
`
