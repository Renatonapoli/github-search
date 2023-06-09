import styles from "./Avatar.module.css"

export function Avatar() {
  return (
    <div className={styles.containerAvatar}>
      <div className={styles.avatarTitleSubtitle}>
        <img
          src="../../src/assets/images/imageAvatar.svg"
          alt="Imagem do Avatar"
        />
        <span className={styles.circleIconAvatar}></span>

        <main>
          <div className={styles.nameTitles}>
            <h1 className={styles.title}>Renato Napoli</h1>
            <h4>Desenvolvedor Front-end Pleno</h4>
            <h4>Magazord - Tagged</h4>
          </div>
        </main>
      </div>
      <footer>
        <div>
          <img src="../../src/assets/icons/empresa.svg" alt="icone empresa" />
          <span>Empresa</span>
        </div>
        <div>
          <img
            src="../../src/assets/icons/localidade.svg"
            alt="icone localidade"
          />
          <span>Localidade</span>
        </div>
        <div>
          <img src="../../src/assets/icons/link.svg" alt="icone link" />
          <span>
            <a href="#">Link</a>
          </span>
        </div>
        <div>
          <img
            src="../../src/assets/icons/instagram.svg"
            alt="icone instagram"
          />
          <span>
            <a href="#">Instagram</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
