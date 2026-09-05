import {useState} from 'react'
import dishesData from './data/dishes.json'
import {getRandomDish} from "./utils/getRandomDish.js";
import './App.css'
import Header from "./components/Header/Header.jsx";
import DishPickButtons from "./components/DishPickButtons/DishPickButtons.jsx";
import DishCard from "./components/DishCard/DishCard.jsx";

function App() {
  const [currentDish, setCurrentDish] = useState(null);
  const [category, setCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleRandomize = (selectedCategory) => {
    const newDish = getRandomDish(dishesData,selectedCategory, currentDish?.id);
    setCategory(selectedCategory);
    setCurrentDish(newDish);
  }
  console.log(currentDish);
  return (
    <div>
      <Header/>
      <main>
        <div className="main__wrapper">
          {isVisible && (
            <DishCard onVisible={setIsVisible} dish={currentDish}/>
          )}
          <DishPickButtons
            onVisible={setIsVisible}
            onPickDish={handleRandomize}
          />
        </div>
      </main>
    </div>
  )
}

export default App
