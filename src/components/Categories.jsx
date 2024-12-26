import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterRecipeByCategory } from "../slices/RecipeSlice";
import { useNavigate } from "react-router-dom";

const Category = () => {
    const { category } = useSelector(state => state.recipies)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        dispatch(filterRecipeByCategory({url}))
    }, [dispatch])

    return (
        <div className="container-fluid text-white mb-4">
            <h3 className="text-center mb-3">Recepies By Categories</h3>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {category?.map((cat, i) => (
                    <div key={i} 
                        onClick={() => navigate(`/recipe/meal/category/${cat?.strCategory}`)} 
                        className={`${cat?.strCategory.toLowerCase() === 'unknown' ? "d-none" : ""} btn btn-secondary`}>
                            {cat?.strCategory}
                    </div>
                ))}
        </div>
        </div>
        
    )
}

export default Category;