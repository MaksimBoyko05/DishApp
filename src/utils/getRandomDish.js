export const getRandomDish = (dishes, category, currentDishId) => {

  const filteredDishes = dishes.filter((dish) => dish.category === category);
  const availableDishes = filteredDishes.filter((dish) => dish.id !== currentDishId)
  if (availableDishes.length === 0) {
    return filteredDishes[0];
  }
  const randomIndex = Math.floor(Math.random() * availableDishes.length);
    return availableDishes[randomIndex];
};
