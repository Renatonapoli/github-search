import { styled } from "styled-components"

export const ContainerRepositories = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 0.5rem;
    color: var(--gray-600);
  }
  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    font-size: 1.2rem;
    color: var(--gray-900);
  }

  span {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    color: var(--gray-900);
  }
`
export const ContainerStarsRamos = styled.div`
  display: flex;
  margin-top: 0.75rem;

  span {
    margin-top: 1.1rem;
  }

  p {
    color: var(--gray-900);
    margin-left: 0.75rem;
  }
`
export const StarQuantity = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 0.75rem;
  }
`
export const RamosQuantity = styled.div`
  display: flex;
  margin-left: 2rem;
`
