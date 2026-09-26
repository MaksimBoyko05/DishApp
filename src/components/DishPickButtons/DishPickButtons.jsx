import styles from "./DishPickButtons.module.scss"
import {LunchIcon} from "../Icons/Lunch.jsx";
import {DinnerIcon} from "../Icons/Dinner.jsx";

export default function DishPickButtons({onPickDish, onVisible}) {
  return (
    <div className={styles.buttons__container}>
      <button
        className={styles.button__lunch}
        onClick={() => {
          onPickDish("Обід");
          onVisible(true);
        }}><LunchIcon/>Обрати обід
      </button>
      <button
        className={styles.button__dinner}
        onClick={() => {
          onPickDish("Вечеря");
          onVisible(true);
        }}><DinnerIcon/>Обрати вечерю
      </button>
    </div>
  )
}