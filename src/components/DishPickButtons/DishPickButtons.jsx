import styles from "./DishPickButtons.module.scss"
export default function DishPickButtons({onPickDish, onVisible}) {
  return (
    <div className={styles.buttons__container}>
      <button onClick={()=>{
        onPickDish();
        onVisible(true);
      }}>Обрати страву</button>
    </div>
  )
}