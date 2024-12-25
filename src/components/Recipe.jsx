import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipe } from "../slices/RecipeSlice";


const Recipe = () => {
    const { data, image, fetchStatus, error } = useSelector((state) => state.recipies);
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

            <div className="mt-5">
                <h1 className="mb-4">Ingredients: </h1>
                <ul className="list-unstyled row row-cols-2 row-cols-lg-6">
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient1}-small.png`} alt={data[0]?.strIngredient1} />
                            <h4 className="text-center">{data[0]?.strIngredient1}</h4>
                        </div>
                    </li>
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient2}-small.png`} alt={data[0]?.strIngredient2} />
                            <h4 className="text-center">{data[0]?.strIngredient2}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient3}-small.png`} alt={data[0]?.strIngredient3} />
                            <h4 className="text-center">{data[0]?.strIngredient3}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient4}-small.png`} alt={data[0]?.strIngredient4} />
                            <h4 className="text-center">{data[0]?.strIngredient4}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient5}-small.png`} alt={data[0]?.strIngredient5} />
                            <h4 className="text-center">{data[0]?.strIngredient5}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient6}-small.png`} alt={data[0]?.strIngredient6} />
                            <h4 className="text-center">{data[0]?.strIngredient6}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient7}-small.png`} alt={data[0]?.strIngredient7} />
                            <h4 className="text-center">{data[0]?.strIngredient7}</h4>
                        </div>
                    </li>                               
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient8}-small.png`} alt={data[0]?.strIngredient8} />
                            <h4 className="text-center">{data[0]?.strIngredient8}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient9}-small.png`} alt={data[0]?.strIngredient9} />
                            <h4 className="text-center">{data[0]?.strIngredient9}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient10}-small.png`} alt={data[0]?.strIngredient10} />
                            <h4 className="text-center">{data[0]?.strIngredient10}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient11}-small.png`} alt={data[0]?.strIngredient11} />
                            <h4 className="text-center">{data[0]?.strIngredient11}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="clearfix d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="clearfix img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient12}-small.png`} alt={data[0]?.strIngredient12} />
                            <h4 className="text-center clearfix">{data[0]?.strIngredient12}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient13}-small.png`} alt={data[0]?.strIngredient13} />
                            <h4 className="text-center">{data[0]?.strIngredient13}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient14}-small.png`} alt={data[0]?.strIngredient14} />
                            <h4 className="text-center">{data[0]?.strIngredient14}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient15}-small.png`} alt={data[0]?.strIngredient15} />
                            <h4 className="text-center">{data[0]?.strIngredient15}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient16}-small.png`} alt={data[0]?.strIngredient16} />
                            <h4 className="text-center">{data[0]?.strIngredient16}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient17}-small.png`} alt={data[0]?.strIngredient17} />
                            <h4 className="text-center">{data[0]?.strIngredient17}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient18}-small.png`} alt={data[0]?.strIngredient18} />
                            <h4 className="text-center">{data[0]?.strIngredient18}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient19}-small.png`} alt={data[0]?.strIngredient19} />
                            <h4 className="text-center">{data[0]?.strIngredient19}</h4>
                        </div>
                    </li>                
                    <li className="clearfix">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <img className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient20}-small.png`} alt={data[0]?.strIngredient20} />
                            <h4 className="text-center">{data[0]?.strIngredient20}</h4>
                        </div>
                    </li> 
                </ul>
            </div>
            <div className="mt-5">
                <div className="h2 mb-4">Instruction: </div>
                <p className="fs-5">{data[0]?.strInstructions}</p>
            </div>
        </div>
    )
}

export default Recipe;