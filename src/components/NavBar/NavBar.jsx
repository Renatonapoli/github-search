import styles from "./NavBar.module.css"

import logo from "../../assets/images/logo.svg"
import barra from "../../assets/icons/barra.svg"

export function Navbar() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>GitHub</h1>
      <img className={styles.icon} src={barra} alt="logo" />
      <p>Profile</p>
    </header>
  )
}
