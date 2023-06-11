import { useState, useEffect } from "react"
import { dataAPI } from "../../Service/Api"

import {
  ContainerRepositories,
  Content,
  ContainerStarsRamos,
  StarQuantity,
  RamosQuantity,
} from "./styles"

export function Repositories() {
  const [repos, setRepos] = useState([])

  const getRepos = async () => {
    try {
      const response = await dataAPI.get("/repos")
      const data = response.data

      setRepos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <>
      {repos.map((repo) => {
        return (
          <ContainerRepositories key={repo.id}>
            <Content>
              <h4>{repo.name}</h4>
              <span>/</span>
              <h5>{repo.language}</h5>
            </Content>
            <span>{repo.description || "Sem descriçao do projeto"}</span>

            <ContainerStarsRamos>
              <StarQuantity>
                <img
                  src="../../src/assets/icons/star-black.svg"
                  alt="Ícone estrela"
                />
                <p>{repo.stargazers_count}</p>
              </StarQuantity>
              <RamosQuantity>
                <img
                  src="../../src/assets/icons/ramos.svg"
                  alt="Ícone de ramificação"
                />
                <p>{repo.forks_count}</p>
              </RamosQuantity>
            </ContainerStarsRamos>
          </ContainerRepositories>
        )
      })}
    </>
  )
}
