import { styled } from "styled-components"

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-left: 22rem;
  margin-right: 8rem;

  @media (max-width: 1438px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 868px) {
    margin-left: 0;

    margin-right: 0rem;

    align-items: center;
  }
`

export const AvatarImg = styled.img`
  width: 9.4rem;
  height: 9.4rem;

  border-radius: 50%;
`

export const AvatarTitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CircleIconAvatar = styled.span`
  display: flex;
  justify-content: center;
  margin-top: -2.8rem;
  margin-left: 7.3rem;
  padding: 0.7rem;
  border: 1px solid var(--whrite);
  border-radius: 50%;
  background: var(--white);

  box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);

  img {
    width: 1.1rem;
  }
`

export const NameProfession = styled.main`
  margin-top: 1.5rem;
`

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.8rem;

  @media (max-width: 1344px) {
    width: 15.5rem;
  }
`

export const MyName = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--gray-800);
`
export const Profession = styled.h4`
  color: var(--gray-600);
`
export const Locale = styled(Profession)``

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  div {
    padding-bottom: 1rem;
  }

  span {
    font-size: 0.88rem;
    color: var(--blue-600);
  }

  a {
    text-decoration: none;
    color: var(--blue-600);
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const TitleInformation = styled.p`
  margin-top: 1rem;
  color: var(--blue-600);

  @media (min-width: 768px) {
    display: none;
  }
`
export const ButtonInformation = styled.button`
  border: none;
  justify-content: center;
  width: 2rem;
  height: 1rem;
  margin-top: 0.79rem;
  background: transparent;

  rotate: calc(180);

  img {
    width: 0.86rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
export const Icons = styled.img`
  max-width: 0.88rem;
  max-height: 0.88rem;
  margin-right: 0.5rem;
`
export const ContentInformations = styled.div`
  display: flex;
  width: 26.75rem;
  height: 9rem;
  padding: 1rem;
  flex-direction: column;
  background: var(--gray-200);
  margin-bottom: 1rem;

  div {
    padding-bottom: 1rem;
  }

  span {
    font-size: 0.88rem;
    color: var(--blue-600);
  }

  a {
    text-decoration: none;
    color: var(--blue-600);
  }

  @media (min-width: 768px) {
    display: none;
  }
`
