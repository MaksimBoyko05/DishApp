import styles from "./DishPickButtons.module.scss"
export default function DishPickButtons({onPickDish,onVisible}) {
  return (
    <div className={styles.buttons__container}>
      <button onClick={()=>{
        onPickDish("Обід");
        onVisible(true);
      }}>Обрати Обід</button>
      <button onClick={()=>{
        onPickDish("Вечеря");
        onVisible(true);
      }}>Обрати Вечерю</button>
    </div>
  )
}