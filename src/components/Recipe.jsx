import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipe } from "../slices/RecipeSlice";
import Ingredients from "./Ingredients";

const Recipe = () => {
    const { data, fetchStatus, error } = useSelector((state) => state.recipies);
    const dispatch = useDispatch();
    const { name } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
        dispatch(fetchAllRecipe({url}));
    }, [name, dispatch]);   
    
    return (
        <div className="text-white container-fluid" style={{minHeight: '80vh'}}>
            <h1 className="text-center mt-4">{data[0]?.strMeal}</h1>
            
            <div className="d-flex align-items-center justify-content-center mt-4">
                <img className="img-fluid m-auto" src={data[0]?.strMealThumb} alt={data[0]?.strMeal} />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-4 flex-column h1 gap-2 ">
                { data[0]?.strCategory && <div>Category : {data[0]?.strCategory}</div>}
                { data[0]?.strArea && <div>Area : {data[0]?.strArea}</div> }
                {data[0]?.strTags && <div>Tags : {data[0]?.strTags}</div> }
            </div>

            <Ingredients data={data}/>
            
            <div className="mt-5">
                <div className="h2 mb-4">Instruction: </div>
                <p className="fs-5">{data[0]?.strInstructions}</p>
            </div>
        </div>
    )
}

export default Recipe;