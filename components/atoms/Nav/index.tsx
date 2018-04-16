import styled from 'styled-components'

export const Nav = styled.nav`
  text-align: center;
  background-color: #000;
  width: 40px;

  li {
    a {
      color: #fff;
      display: block;
      padding: .7rem;

      &:hover,
      &.active {
        background-color: #3ebdaa;
      }
    }
  }

  @media (max-width: 48rem) {
    width: 100%;

    ul {
      display: flex;
    }
  }
`
