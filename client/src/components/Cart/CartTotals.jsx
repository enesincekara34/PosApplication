import React from 'react';

const CartTotals = () => {
    return(
        <div className='cart'>
            <h2 className='bg-blue-600 text-center py-4 text-white font-bold tracking-wide'>Sepetteki Ürünler</h2>
            <div className='cart-items'>
                <div className='cart-item'>Cart Item</div>
            </div>
            
                <div className= '  bg-blue-600 text-center py-4 text-white font-bold tracking-wide'>
                    <div className='flex justify-between'>
                        <b>Ara Toplam</b>
                        <span>99₺</span>
                    </div>
                </div>
            
        </div>
        
    );
}

export default CartTotals