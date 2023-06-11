import { styled } from "styled-components"

export const ContainerStarreds = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.4rem;

  span {
    margin-top: 0.5rem;
    color: var(--gray-600);
  }

  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
  @media (max-width: 768px) {
    margin-left: 0.9rem;
    display: flex;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: baseline;

  h4 {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--gray-900);
  }

  span {
    margin: 0 0.5rem;
    color: var(--gray-900);
  }
  h5 {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--blue-600);
  }
`

export const ContainerRamos = styled.div`
  display: flex;
  margin-top: 0.75rem;

  span {
    margin-top: 1.1rem;
  }

  p {
    color: var(--gray-900);
  }
`

export const RamosQuantity = styled.div`
  display: flex;
  margin-left: 2rem;

  p {
    margin-left: 0.25rem;
  }
`
