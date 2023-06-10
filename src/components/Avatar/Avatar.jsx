//import styles from "./Avatar.module.css"

import {
  ContainerAvatar,
  AvatarTitleSubtitle,
  AvatarImg,
  CircleIconAvatar,
  NameProfession,
  ContainerNames,
  MyName,
  Profession,
  Locale,
  Footer,
  Icons,
} from "./styles"

export function Avatar() {
  return (
    <ContainerAvatar>
      <AvatarTitleSubtitle>
        <AvatarImg
          src="../../src/assets/images/imageAvatar.svg"
          alt="Imagem do Avatar"
        />
        <CircleIconAvatar />

        <NameProfession>
          <ContainerNames>
            <MyName>Renato Napoli</MyName>
            <Profession>Desenvolvedor Front-end Pleno</Profession>
            <Locale>Magazord - Tagged</Locale>
          </ContainerNames>
        </NameProfession>
      </AvatarTitleSubtitle>
      <Footer>
        <div>
          <Icons src="../../src/assets/icons/empresa.svg" alt="icone empresa" />
          <span>Empresa</span>
        </div>
        <div>
          <Icons
            src="../../src/assets/icons/localidade.svg"
            alt="icone localidade"
          />
          <span>Localidade</span>
        </div>
        <div>
          <Icons src="../../src/assets/icons/link.svg" alt="icone link" />
          <span>
            <a href="#">Link</a>
          </span>
        </div>
        <div>
          <Icons
            src="../../src/assets/icons/instagram.svg"
            alt="icone instagram"
          />
          <span>
            <a href="#">Instagram</a>
          </span>
        </div>
      </Footer>
    </ContainerAvatar>
  )
}
