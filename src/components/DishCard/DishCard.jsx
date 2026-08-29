import styles from './DishCard.module.scss';
import {useState} from "react";
export default function DishCard({dish}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.dish__card} onClick={() => {setIsClicked(true)}}>
      {isClicked &&(
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line
            x1="20"
            y1="4"
            x2="14"
            y2="10"></line>
          <polyline points="20 10 14 10 14 4"></polyline>

          <line
            x1="4"
            y1="20"
            x2="10"
            y2="14"></line>
          <polyline points="4 14 10 14 10 20"></polyline>
        </svg>
      </div>
      )}
      <h2>{dish.name}</h2>
      <img alt={"Зображення страви"} src={dish.imageUrl} />
      <p>{dish.description}</p>
      <div>
      {isClicked &&(
        <>
          <p className={styles.dish__card__title}>Інградієнти:</p>
          {dish.ingredients.map((item, index) => (
            <div key={index} className={styles.dish__card__info}>
              <p>{item.name}</p>: <strong>{item.quantity}{item.unit}</strong>
            </div>
          ))}
          <p className={styles.dish__card__title}>Рецепт:</p>
          <p>{dish.recipe}</p>
        </>
        )}

      </div>
    </div>
  )
}