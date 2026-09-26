import styles from './DishCard.module.scss';
import { useState } from "react";

export default function DishCard({ dish, onVisible }) {
  const [isClicked, setIsClicked] = useState(false);

  const lunch = dish.category === "Обід";
  const dinner = dish.category === "Вечеря";

  return (
    <div
      className={styles.dish__card}
      key={dish.id}
      onClick={() => setIsClicked(true)}
    >
      {isClicked && (
        <div
          className={styles.dish__card__icon}
          onClick={(e) => {
            e.stopPropagation();
            setIsClicked(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="20" y1="4" x2="14" y2="10" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="4" y1="20" x2="10" y2="14" />
            <polyline points="4 14 10 14 10 20" />
          </svg>
        </div>
      )}

      <img alt="Зображення страви" src={dish.imageUrl} />

      <div className={styles.dish__card__head}>
        <h2>{dish.name}</h2>
        <span className={styles.dish__description}>{dish.description}</span>
        <span className={dinner ? styles.dish__card__dinner_badge : styles.dish__card_lunch_badge}>
          {dish.category}
        </span>
      </div>

      {isClicked && (
        <div className={styles.dish__ingredients_container}>
          <p className={styles.dish__card__title}>Інгредієнти:</p>
          {dish.ingredients.map((item, index) => (
            <div key={index} className={styles.dish__card__info}>
              <span>{item.name}:</span>
              <strong>{item.quantity} {item.unit}</strong>
            </div>
          ))}

          <div className={styles.dish__card_recipecontainer}>
            <p className={styles.dish__card__title}>Рецепт:</p>
            <p>{dish.recipe}</p>
          </div>
        </div>
      )}
    </div>
  );
}