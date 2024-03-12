import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'

function App() {


  return (
    <div>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 h-screen overflow-y-scroll pb-64">
          <Categories/>
        </div>
        <div className="products flex-[8]">
          <div>products</div>
        </div>
        <div className="cartTotals">
          <div>cart totals</div>
        </div>
      </div>
    </div>
    
  )
}

export default App
