export const getRandomDish = (dishes, currentDishId) => {
  const availableDishes = dishes.filter((dish) => dish.id !== currentDishId)
  if (availableDishes.length === 0) {
    return dishes[0];
  }
  const randomIndex = Math.floor(Math.random() * availableDishes.length);
    return availableDishes[randomIndex];
};
