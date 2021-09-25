import React, { useEffect, useState } from 'react';
import Minister from '../Minister/Minister';
import './Ministers.css'
const Ministers = () => {
    const [ministers, setMinisters] = useState([]);
    useEffect(() => {
        fetch('/minister.json')
            .then(res => res.json())
            .then(data => setMinisters(data))
    }, [])
    const addToCart = minister => {
        console.log(minister)
    }
    return (
        <div className="container p-5">
            <div className="ministers-container">
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
                    <h2>Cart summary</h2>
                </div>

            </div>
        </div>
    );
};

export default Ministers;