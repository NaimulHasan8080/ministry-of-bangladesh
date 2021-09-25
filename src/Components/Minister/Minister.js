import React from 'react';
import './Minister.css'
const Minister = (props) => {
    //distructuring from props.minister
    const { name, area, salary, img, ministry, religion } = props.minister || {};
    return (
        <div className="minister-container text-center">
            <img className="minister-img m-4 mx-auto" src={img} />
            <h4>Name : {name}</h4>
            <h4>Ministry : {ministry}</h4>
            <h4>Area :{area}</h4>
            <h4>Religion : {religion}</h4>
            <h4>Salary : {salary}</h4>
            <button onClick={() => props.addToCart(props.minister)} className="btn-regular mx-auto">Selected Minister</button>

            <div className="d-flex justify-content-evenly m-2">
                <h2><a target="_blank" href="https://en.wikipedia.org/wiki/Bangladesh"><i class="fab fa-facebook-messenger"></i></a></h2>
                <h2><a target="_blank" href="https://en.wikipedia.org/wiki/Bangladesh"><i class="fab fa-whatsapp"></i></a></h2>
            </div>

        </div>
    );
};

export default Minister;