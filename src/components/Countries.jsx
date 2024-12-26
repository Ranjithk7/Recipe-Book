import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterRecipeByCountry } from "../slices/RecipeSlice";
import { useNavigate } from "react-router-dom";

const Country = () => {
    const { areas } = useSelector(state => state.recipies)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        dispatch(filterRecipeByCountry({url}))
    }, [dispatch])

    return (
        <div className="container-fluid text-white mb-4">
            <h3 className="text-center mb-3">Recepies By Countries</h3>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {areas?.map((area, i) => (
                    <div key={i} 
                        onClick={() => navigate(`/recipe/meal/country/${area.strArea}`)} 
                        className={`${area.strArea.toLowerCase() === 'unknown' ? "d-none" : ""} btn btn-secondary`}>
                            {area.strArea}
                    </div>
                ))}
        </div>
        </div>
        
    )
}

export default Country;