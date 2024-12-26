import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const order = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const BrowseMeals = () => {
    let letters = [];
    
    useMemo(() => {
        for (let i = 0; i < order.length; i++) {
            letters.push(order[i]);
        }
    }, [order.length])
    return (
        <div className="container-fluid">
            <h5 className="text-white text-center mb-2">Get Meals By Order</h5>
            <div className="d-flex flex-wrap justify-content-center">
            {letters.map((lett, i) => (
                <div key={i} className="d-flex text-white h4">
                    <Link to={`recipe/meal/letter/${lett.toLowerCase()}`}
                        className="text-decoration-none text-warning">
                        {lett}
                    </Link>
                    <div className="ms-1 me-1">{lett === 'Z' ? '' :'/'}</div>
                </div>
            ))}
            </div>
        </div>
    )
} 

export default BrowseMeals;