import styles from "./Repositories.module.css"

export function Repositories() {
  return (
    <div className={styles.containerRepositories}>
      <div className={styles.content}>
        <p>Node</p>
        <span>/</span>
        <p>Release</p>
      </div>
      <span>Node.js Foundation Release Working Group.</span>
      <div className={styles.containerStarsRamos}>
        <div className={styles.starsQuantity}>
          <img
            src="../../src/assets/icons/star-black.svg"
            alt="Ícone estrela"
          />
          <p>1.569</p>
        </div>
        <div className={styles.ramosQuantity}>
          <img
            src="../../src/assets/icons/ramos.svg"
            alt="Ícone de ramificação"
          />
          <p>142</p>
        </div>
      </div>
    </div>
  )
}
