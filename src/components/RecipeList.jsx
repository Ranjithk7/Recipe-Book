import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipe } from "../slices/RecipeSlice";

const RecipeList = () => {
    const { filter } = useSelector(state => state.search);
    const { data, fetchStatus, error } = useSelector((state) => state.recipies);
    const dispatch = useDispatch();
    let { letter, country, category } = useParams();

    useEffect(() => {
        let url
        if (letter || country || category) {
            letter
                ? url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
                : country
                    ? url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
                    : url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        } else {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
        }
        dispatch(fetchAllRecipe({url}));
        
    }, [letter, country, category, dispatch]);
    
    const meals = data?.filter((meal) => {
        return (
            meal.strMeal.toLowerCase().includes(filter["query"]) ||
            meal.strCategory.toLowerCase().includes(filter["query"])
        )
    })

    return (
         <div className="m-auto mt-3 container-fluid row row-cols-1 row-cols-sm-2 row-cols-lg-4" style={{minHeight:'75vh'}}>
            {meals ? meals?.map(meal => (
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
