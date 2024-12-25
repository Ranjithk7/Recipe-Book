import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipe } from "../slices/RecipeSlice";
import NotFoundPage from './NotFoundPage';

const RecipeList = () => {
    const { data, fetchStatus, error } = useSelector((state) => state.recipies);
    const dispatch = useDispatch();
    let { letter } = useParams();
    
    useEffect(() => {
        letter ? null : letter = 'a';
        if (letter?.length === 1 ) {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
            dispatch(fetchAllRecipe({url}));
        }
    }, [letter, dispatch]);    
    
    
    return (
         <div className="m-auto mt-3 container-fluid row row-cols-1 row-cols-sm-2 row-cols-lg-4" style={{minHeight:'80vh'}}>
            {data ? data.map(meal => (
                <div className="col mb-5" key={meal.idMeal} onClick={() => window.location.replace(`/recipe/meal/name/${meal.strMeal}`)}>
                    <img className="img-fluid rounded-4" 
                        src={meal.strMealThumb} 
                        alt={meal.strMeal} />
                    <h4 className="text-white text-center">{meal.strMeal}</h4>
                </div>
            )) : <h1 className="text-white">No Items Found</h1>}
        </div>
    );
}

export default RecipeList;
