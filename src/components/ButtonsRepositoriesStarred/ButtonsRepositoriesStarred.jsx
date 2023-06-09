import styles from "./ButtonsRepositoriesStarred.module.css"
//import { Repositories } from "../Repositories/Repositories"
import { Starred } from "../Starred/Starred"
export function ButtonsRepositoriesStarred() {
  return (
    <div>
      <header className={styles.header}>
        <button>
          <img src="../../src/assets/icons/book.svg" />
          Repositories
        </button>
        <span>81</span>
        <button className={styles.buttonStarred}>
          <img src="../../src/assets/icons/star.svg" />
          Starred
        </button>
        <span>12</span>
      </header>

      <input className="input" type="text" />

      {/* <Repositories /> */}
      <Starred />
    </div>
  )
}
