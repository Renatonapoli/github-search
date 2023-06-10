import { Header, Logo } from "./styles"

import logo from "../../assets/images/logo.svg"
import barra from "../../assets/icons/barra.svg"

export function Navbar() {
  return (
    <Header>
      <Logo src={logo} alt="Ícnone logo" />
      <h1>GitHub</h1>
      <img src={barra} alt="icone barra" />
      <p>Profile</p>
    </Header>
  )
}
