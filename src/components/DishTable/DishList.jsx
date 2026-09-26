import dishesData from '../../data/dishes.json';
import styles from './DishTable.module.scss';

export default function DishList() {
  return (
    <div className={styles.table__container}>
      <div className={styles.table__wrapper}>
      <table className={styles.dish__table}>
        <thead>
        <tr>
          <th>Назва</th>
          <th>Опис</th>
          <th>Категорія</th>
          <th>Інгредієнти</th>
        </tr>
        </thead>
        <tbody>
        {dishesData.map((dish) => (
          <tr key={dish.id}>
            <td>{dish.name}</td>
            <td>{dish.description}</td>
            <td >
              <span className={dish.category === "Вечеря" ? styles.dish__card__dinner_badge : styles.dish__card_lunch_badge}>{dish.category}</span></td>
            <td>
              {dish.ingredients.map((item) => item.name).join(', ')}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}