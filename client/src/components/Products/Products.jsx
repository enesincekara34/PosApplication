import React from 'react';

const Products = () => {
    return(
        <div className='products-wrapper grid gap-4 ' 
            style={{gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))"}}
        >
            <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
                <div className='product-img'>
                    <img src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                    alt=""
                    className='h-28 object-cover w-full border-b'
                    />
                </div>
                <div className="product-info p-2">
                    <span className='font-bold flex flex-col'>Elma</span>
                    <span>12₺</span>
                </div>
            </div>
            <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
                <div className='product-img'>
                    <img src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                    alt=""
                    className='h-28 object-cover w-full border-b'
                    />
                </div>
                <div className="product-info p-2 ">
                    <span className='font-bold flex flex-col'>Elma</span>
                    <span>12₺</span>
                </div>
            </div>
        </div>
    );
}

export default Products