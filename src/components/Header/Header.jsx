import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"
export default function Header() {
  return (
    <header>
      <div className={styles.headerwrapper}>
        <div className={styles.logocontainer}>
          <img src={logo} alt="logo" />
          <Link to="/" > <h2>DishRandomizer</h2></Link>
        </div>
        <div className={styles.button__container}>
          <Link to="/dishes"> <button >Список страв</button></Link>
          <button disabled={true}>Додати страву</button>
        </div>
      </div>
    </header>
  )
}