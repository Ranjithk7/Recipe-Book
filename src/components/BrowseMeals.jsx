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
        <div className="h4 d-flex flex-wrap justify-content-center text-white gap-1 mt-4 ms-2 me-2">
            {letters.map((lett, i) => (
                <>
                <Link to={`recipe/meal/letter/${lett.toLowerCase()}`}
                    key={i}
                    className="text-decoration-none h4 text-warning">
                    {lett}
                </Link>
                <div key={lett}>{lett === 'Z' ? '' :' /'}</div>
                </>
            ))}
        </div>
    )
} 

export default BrowseMeals;