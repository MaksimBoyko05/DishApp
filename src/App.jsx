import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import { Home } from './pages/Home.jsx';
import DishTable from "./pages/DishTable.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes" element={<DishTable />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;