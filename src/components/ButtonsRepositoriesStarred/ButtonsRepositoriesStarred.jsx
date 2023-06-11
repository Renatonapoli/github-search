import {
  ButtonType,
  ButtonLanguage,
  Search,
  ContainerSearchButtons,
  Header,
  HandleSelectRepositories,
  ButtonRepositories,
  ButtonStarred,
  SelectedSpanRepositories,
  SelectedSpanStarred,
  SearchMobile,
  Form,
  Container,
} from "./styles"
import { Repositories } from "../Repositories/Repositories"
import { Starred } from "../Starred/Starred"
import { useState, useEffect } from "react"
import { dataAPI } from "../../Service/Api"

import bookBlack from "../../assets/icons/book-black.svg"
import book from "../../assets/icons/book.svg"
import starBlack from "../../assets/icons/star-starred-black.svg"
import star from "../../assets/icons/star.svg"

export function ButtonsRepositoriesStarred() {
  const [repositories, setRepositories] = useState(true)
  const [starred, setStarred] = useState(false)
  const [repos, setRepos] = useState([])
  const [starreds, setStarreds] = useState([])

  const handleRepositories = () => {
    setRepositories(true)
    setStarred(false)
  }

  const handleStarred = () => {
    setRepositories(false)
    setStarred(true)
  }

  const getRepos = async () => {
    try {
      const response = await dataAPI.get("/repos")
      const responseStarred = await dataAPI.get("/starred")
      const data = response.data
      const dataStarred = responseStarred.data

      setRepos(data)
      setStarreds(dataStarred)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <div>
      <Header>
        <HandleSelectRepositories>
          <ButtonRepositories onClick={handleRepositories}>
            <img src={repositories ? bookBlack : book} />
            Repositories
            <p>{repos.length}</p>
          </ButtonRepositories>

          {repositories && <SelectedSpanRepositories />}
        </HandleSelectRepositories>
        <HandleSelectRepositories>
          <ButtonStarred onClick={handleStarred}>
            <img src={repositories ? starBlack : star} />
            Starred
            <p>{starreds.length}</p>
          </ButtonStarred>
          {starred && <SelectedSpanStarred />}
        </HandleSelectRepositories>
      </Header>
      <Container>
        <ContainerSearchButtons>
          <Search placeholder="Search Here " />

          <ButtonType>
            <img src="../../src/assets/icons/seta-para-baixo.svg" alt="" />
            Type
          </ButtonType>

          <ButtonLanguage>
            <img src="../../src/assets/icons/seta-para-baixo.svg" />
            Language
          </ButtonLanguage>
        </ContainerSearchButtons>
        <Form>
          <SearchMobile />
          <ButtonType>
            <img src="../../src/assets/icons/seta-para-baixo.svg" alt="" />
            Type
          </ButtonType>

          <ButtonLanguage>
            <img src="../../src/assets/icons/seta-para-baixo.svg" />
            Language
          </ButtonLanguage>
        </Form>
      </Container>

      {repositories && <Repositories />}
      {starred && <Starred />}
    </div>
  )
}
