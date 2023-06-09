import styles from "./Starred.module.css"

export function Starred() {
  return (
    <div className={styles.containerRepositories}>
      <div className={styles.content}>
        <p>Node</p>
        <span>/</span>
        <p>Release</p>
      </div>
      <span>Node.js Foundation Release Working Group.</span>
      <div className={styles.containerRamos}>
        <p>C++</p>

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
