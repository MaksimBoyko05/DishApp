import styles from './Header.module.scss';
import logo from "../../assets/logo.svg"
export default function Header() {
  return (
    <header>
      <div className={styles.headerwrapper}>
        <div className={styles.logocontainer}>
          <img src={logo} alt="logo" />
          <h2>DishRandomizer</h2>
        </div>
        <div className={styles.button__container}>
          <button disabled={true}>Список страв</button>
          <button disabled={true}>Додати страву</button>
        </div>
      </div>
    </header>
  )
}