import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  margin-top: 2.8rem;

  @media (max-width: 1200px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`
export const HandleSelectRepositories = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const ContainerSearchButtons = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 1200px) {
    flex-wrap: wrap-reverse;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const SelectedSpanRepositories = styled.span`
  width: 11rem;
  height: 0.1rem;
  margin-left: auto;
  margin-top: 0.5rem;
  border: 1px solid var(--orange-500);
`
export const SelectedSpanStarred = styled(SelectedSpanRepositories)`
  width: 9rem;
`

export const ButtonType = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  gap: 0.75rem;

  width: 6.5rem;
  height: 40px;
  margin-left: 2.5rem;

  color: var(--white);
  background: linear-gradient(89.89deg, #0056a6 -30.01%, #0587ff 125.65%);
  border-radius: 42px;

  @media (max-width: 1200px) {
    margin: 1.9rem 1rem 0 0;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: -3.4rem 1rem 3rem;
  }
`

export const ButtonLanguage = styled(ButtonType)`
  width: 9rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 8rem;
    margin-top: -5.9rem;
  }
`

export const ButtonRepositories = styled.button`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background: var(--white);
  color: var(--gray-900);

  border: none;

  img {
    margin-right: 1.1rem;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
    color: var(--gray-600);
    border: 1px solid var(--gray-300);
    border-radius: 39%;
  }
`

export const ButtonStarred = styled(ButtonRepositories)`
  margin-left: 4.1rem;

  span {
    width: 3.5rem;
  }
`
export const Search = styled.input`
  margin-top: 5.9rem;
  margin-bottom: 2.5rem;
  width: 29rem;
  border: none;
  border-bottom: 1px solid var(--gray-500);
  padding-left: 2rem;
  font-size: large;

  outline: none;

  height: 1.5rem;
  background-image: url(../../src/assets/icons/lupa.svg);
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    margin-top: 1.75rem;
  }
`
export const Form = styled.form`
  display: inline-block;

  @media (min-width: 768px) {
    display: none;
  }
`

export const SearchMobile = styled.input`
  display: flex;

  width: 26rem;
  height: 2.5rem;
  border: none;
  background: var(--gray-300);
  border-radius: 8px;
  padding: 2rem;
  font-size: large;
  outline: none;
  text-align: right;

  background-image: url(../../src/assets/icons/lupa.svg);
  background-repeat: no-repeat;
  background-position: 98%;

  gap: 124px;

  @media (max-width: 1200px) {
    margin-top: 1.75rem;
  }
`
