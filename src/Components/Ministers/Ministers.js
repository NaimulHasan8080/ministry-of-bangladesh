import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Minister from '../Minister/Minister';
import './Ministers.css'
const Ministers = () => {
    const [ministers, setMinisters] = useState([]);
    useEffect(() => {
        fetch('/minister.json')
            .then(res => res.json())
            .then(data => setMinisters(data))
    }, [])
    //declare a new cart
    const [cart, setCart] = useState([]);

    const addToCart = minister => {
        const newCart = [...cart, minister];
        setCart(newCart)
    }

    return (
        <div className="ministers-container p-5">
            <div className="minister">
                {
                    ministers.map(minister => <Minister
                        key={minister.name}
                        addToCart={addToCart}
                        minister={minister}>
                    </Minister>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Ministers;