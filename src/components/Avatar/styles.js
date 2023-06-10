import { styled } from "styled-components"

export const ContainerAvatar = styled.div`
  margin-top: 2.5rem;
  margin-left: 17.25rem;
  margin-right: 8rem;

  @media (max-width: 1438px) {
    margin-left: 1.5rem;
  }
`

export const AvatarImg = styled.img`
  padding: 9.75;
  border-radius: 50%;
`

export const AvatarTitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CircleIconAvatar = styled.span`
  margin-top: -2rem;
  margin-left: 6rem;
  padding: 1.25rem;
  border: 1px solid var(--whrite);
  border-radius: 50%;
  background: var(--whrite);

  box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
  transform: matrix(1, 0, 0, -1, 0, 0);
`

export const NameProfession = styled.main`
  margin-top: 1.5rem;
`

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
`
export const Icons = styled.img`
  max-width: 0.88rem;
  max-height: 0.88rem;
  margin-right: 0.5rem;
`
