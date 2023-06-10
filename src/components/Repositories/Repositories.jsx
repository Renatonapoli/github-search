import {
  ContainerRepositories,
  Content,
  ContainerStarsRamos,
  StarQuantity,
  RamosQuantity,
} from "./styles"

export function Repositories() {
  return (
    <ContainerRepositories>
      <Content>
        <p>Node</p>
        <span>/</span>
        <p>Release</p>
      </Content>
      <span>Node.js Foundation Release Working Group.</span>
      <ContainerStarsRamos>
        <StarQuantity>
          <img
            src="../../src/assets/icons/star-black.svg"
            alt="Ícone estrela"
          />
          <p>1.569</p>
        </StarQuantity>
        <RamosQuantity>
          <img
            src="../../src/assets/icons/ramos.svg"
            alt="Ícone de ramificação"
          />
          <p>142</p>
        </RamosQuantity>
      </ContainerStarsRamos>
    </ContainerRepositories>
  )
}
