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
//import { Starred } from "../Starred/Starred"

export function ButtonsRepositoriesStarred() {
  return (
    <div>
      <Header>
        <HandleSelectRepositories>
          <ButtonRepositories>
            <img src="../../src/assets/icons/book.svg" />
            Repositories
            <p>81</p>
          </ButtonRepositories>

          <SelectedSpanRepositories />
        </HandleSelectRepositories>
        <HandleSelectRepositories>
          <ButtonStarred>
            <img src="../../src/assets/icons/star.svg" />
            Starred
            <p>12</p>
          </ButtonStarred>
          <SelectedSpanStarred />
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

      <Repositories />
      {/* <Starred /> */}
    </div>
  )
}
