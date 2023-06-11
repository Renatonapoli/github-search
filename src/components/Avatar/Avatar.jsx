import { useEffect, useState } from "react"
import { dataAPI } from "../../Service/Api"

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
  TitleInformation,
  ButtonInformation,
  ContentInformations,
} from "./styles"

export function Avatar() {
  const [informations, setInformations] = useState([])
  const [showContent, setShowContent] = useState(false)

  const getDatas = async () => {
    try {
      const response = await dataAPI.get()
      const data = response.data

      setInformations(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  const toggleContent = () => {
    setShowContent(!showContent)
  }

  return (
    <ContainerAvatar>
      <AvatarTitleSubtitle>
        <AvatarImg src={informations.avatar_url} alt="Imagem do Avatar" />
        <CircleIconAvatar>
          <img src="../../src/assets/icons/smiles.svg" alt="" />
        </CircleIconAvatar>

        <NameProfession>
          <ContainerNames>
            <MyName>{informations.name}</MyName>
            <Profession>Desenvolvedor</Profession>
            <Locale>Magazord - Tagged</Locale>
          </ContainerNames>
        </NameProfession>
      </AvatarTitleSubtitle>
      <Footer>
        <div>
          <Icons src="../../src/assets/icons/empresa.svg" alt="icone empresa" />
          <span>{informations.company || "Empresa"}</span>
        </div>
        <div>
          <Icons
            src="../../src/assets/icons/localidade.svg"
            alt="icone localidade"
          />
          <span>{informations.location}</span>
        </div>
        <div>
          <Icons src="../../src/assets/icons/link.svg" alt="icone link" />
          <span>
            <a href={informations.blog}>{informations.blog}</a>
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
      <TitleInformation>Informações adicionais</TitleInformation>
      <ButtonInformation onClick={toggleContent}>
        <img
          src="../../src/assets/icons/seta-para-baixo-blue.svg"
          style={{ transform: showContent ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </ButtonInformation>

      {showContent && (
        <ContentInformations>
          <div>
            <Icons
              src="../../src/assets/icons/empresa.svg"
              alt="icone empresa"
            />
            <span>{informations.company || "Empresa"}</span>
          </div>
          <div>
            <Icons
              src="../../src/assets/icons/localidade.svg"
              alt="icone localidade"
            />
            <span>{informations.location}</span>
          </div>
          <div>
            <Icons src="../../src/assets/icons/link.svg" alt="icone link" />
            <span>
              <a href={informations.blog}>{informations.blog}</a>
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
        </ContentInformations>
      )}
    </ContainerAvatar>
  )
}
