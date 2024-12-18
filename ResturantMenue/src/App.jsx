import React, { useState } from 'react';
import './App.css'
import Categories from './Components/Categories';
import menu from '../data';
import Menu from './Components/Menu';

const AllCategories = ["all",...new Set(menu.map(item=>(item.category)))]
console.log(AllCategories)


function App() {

  const [allMenue , setAllMenue] = useState(menu)
  const [categories,setCategories] = useState(AllCategories)

  const filterMenue = (category)=>{
    if(category === 'all'){
      setAllMenue(menu)
      return
    }

    let filteredMenues = menu.filter( i => i.category === category)
    setAllMenue(filteredMenues)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenue={filterMenue} />
        <Menu allMenue={allMenue}/>
      </section>
    </main>
  );
}

export default App;
