import styles from "./ButtonsRepositoriesStarred.module.css"

//import { Repositories } from "../Repositories/Repositories"
import { Starred } from "../Starred/Starred"

export function ButtonsRepositoriesStarred() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.handleSelectRepositories}>
          <button>
            <img src="../../src/assets/icons/book.svg" />
            Repositories
            <p>81</p>
          </button>
          <span></span>
        </div>
        <div className={styles.handleSelectStarred}>
          <button className={styles.buttonStarred}>
            <img src="../../src/assets/icons/star.svg" />
            Starred
            <p>12</p>
          </button>
          <span></span>
        </div>
      </header>

      <input className="input" type="text" />

      {/* <Repositories /> */}
      <Starred />
    </div>
  )
}
