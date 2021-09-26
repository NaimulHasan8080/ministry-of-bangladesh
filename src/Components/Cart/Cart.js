import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {};
    let total = 0;
    for (const minister of cart) {
        total = total + minister.salary
    }

    return (
        <div className="cart-container text-center">
            <h4><i class="fas fa-user-friends"></i> Added Minister : {cart.length}</h4>
            <h4>Total Salary : {total}</h4>
        </div>
    );
};

export default Cart;