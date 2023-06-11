import { styled } from "styled-components"

export const ContainerRepositories = styled.div`
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
    display: flex;
    font-size: 1.2rem;
    color: var(--gray-900);
    font-weight: 400;
  }

  h5 {
    font-size: 1.2rem;
    color: var(--blue-600);
    font-weight: 400;
  }

  span {
    margin: 0 0.5rem;
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
