import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import CategoryBar from "./components/CategoryBar"
import News from "./components/News"

function App() {

  const [selectedCategory, setCategory] = useState("all")

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
  }

  return (
    <div className="main-container">
      <div className='navbar'>
          <Navbar />
      </div>
      <div className='categorybar'>
          <CategoryBar selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
      </div>
      <div className='news'>
          <News selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
