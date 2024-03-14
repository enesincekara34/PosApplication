import React from 'react';
import Header from '../components/Header/Header'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import CartTotals from '../components/Cart/CartTotals'


const HomePage = () => {
    return(
        <div>
        <Header/>
        <div className="home px-6 flex justify-between gap-10">
          <div className="categories h-screen overflow-y-scroll pb-64">
            <Categories/>
          </div>
          <div className="products flex-[8]">
            <div><Products/></div>
          </div>
          <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
            <CartTotals/>
          </div>
        </div>
      </div>
      
    )
}

export default HomePage