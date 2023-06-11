import { styled } from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: start;
  height: 72px;
  align-items: center;
  background: var(--gray-900);

  h1 {
    color: var(--white);
    margin-left: 1rem;
    margin-right: 0.5rem;
  }
  p {
    font-weight: 300;
    color: var(--white);
    margin-left: 0.5rem;
  }
`

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 20.2rem;

  @media (max-width: 1438px) {
    margin-left: 1.4rem;
  }
`
