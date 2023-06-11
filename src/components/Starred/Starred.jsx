import { useState, useEffect } from "react"
import { dataAPI } from "../../Service/Api"

import {
  ContainerStarreds,
  Content,
  ContainerRamos,
  RamosQuantity,
} from "./styles"

export function Starred() {
  const [starreds, setStarreds] = useState([])
  const getStarreds = async () => {
    try {
      const response = await dataAPI.get("/starred")
      const data = response.data

      setStarreds(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStarreds()
  }, [])

  return (
    <>
      {starreds.map((starred) => {
        return (
          <ContainerStarreds key={starred.id}>
            <Content>
              <h4>{starred.name}</h4>
              <span>/</span>
              <h5>Release</h5>
            </Content>
            <span>{starred.description || "Sem descrição"}</span>
            <ContainerRamos>
              <p>{starred.language}</p>

              <RamosQuantity>
                <img
                  src="../../src/assets/icons/ramos.svg"
                  alt="Ícone de ramificação"
                />
                <p>{starred.forks_count}</p>
              </RamosQuantity>
            </ContainerRamos>
          </ContainerStarreds>
        )
      })}
    </>
  )
}
