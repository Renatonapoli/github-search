import "./App.module.css"

import styles from "../src/App.module.css"
import { Navbar } from "./components/NavBar/NavBar"
import { Avatar } from "./components/Avatar/Avatar"
import { ButtonsRepositoriesStarred } from "./components/ButtonsRepositoriesStarred/ButtonsRepositoriesStarred"

import "../src/global.css"

export function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <main>
          <Avatar />
          <ButtonsRepositoriesStarred />
        </main>
      </div>
    </div>
  )
}
