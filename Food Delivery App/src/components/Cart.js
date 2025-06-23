import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    //It is less efficient
    // const store = useSelector((store) => store)
    // const cartItems = store.cart.items;

    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='w-6/12 m-auto'>
                <div className='flex justify-end'>
                    <button className='p-2 m-2 bg-black text-white rounded-lg'
                        onClick={handleClearCart}>Clear Cart</button>
                </div>
                {cartItems.length == 0 && <h1>Cart is empty Add Items to the cart!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart