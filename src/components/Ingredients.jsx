import React from "react";

const Ingredients = ({data}) => {
    return (
        <div className="mt-5">
            <h1 className="mb-4">Ingredients: </h1>
            <ul className="list-unstyled row row-cols-2 row-cols-lg-6">
                <li className="clearfix">
                    { data[0]?.strIngredient1 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient1 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient1}-small.png`}`} alt={data[0]?.strIngredient1} />
                        <h4 className="text-center">{data[0]?.strIngredient1}</h4>
                        <h5>( {data[0]?.strMeasure1} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient2 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient2 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient2}-small.png`}`} alt={data[0]?.strIngredient2} />
                        <h4 className="text-center">{data[0]?.strIngredient2}</h4>
                        <h5>( {data[0]?.strMeasure2} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient3 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient3 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient3}-small.png`}`} alt={data[0]?.strIngredient3} />
                        <h4 className="text-center">{data[0]?.strIngredient3}</h4>
                        <h5>( {data[0]?.strMeasure3} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient4 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient4 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient4}-small.png`}`} alt={data[0]?.strIngredient4} />
                        <h4 className="text-center">{data[0]?.strIngredient4}</h4>
                        <h5>( {data[0]?.strMeasure4} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient5 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient5 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient5}-small.png`}`} alt={data[0]?.strIngredient5} />
                        <h4 className="text-center">{data[0]?.strIngredient5}</h4>
                        <h5>( {data[0]?.strMeasure5} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient6 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient6 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient6}-small.png`}`} alt={data[0]?.strIngredient6} />
                        <h4 className="text-center">{data[0]?.strIngredient6}</h4>
                        <h5>( {data[0]?.strMeasure6} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient7 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient7 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient7}-small.png`}`} alt={data[0]?.strIngredient7} />
                        <h4 className="text-center">{data[0]?.strIngredient7}</h4>
                        <h5>( {data[0]?.strMeasure7} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient8 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient8 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient8}-small.png`}`} alt={data[0]?.strIngredient8} />
                        <h4 className="text-center">{data[0]?.strIngredient8}</h4>
                        <h5>( {data[0]?.strMeasure8} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient9 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient9 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient9}-small.png`}`} alt={data[0]?.strIngredient9} />
                        <h4 className="text-center">{data[0]?.strIngredient9}</h4>
                        <h5>( {data[0]?.strMeasure9} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient10 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient10 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient10}-small.png`}`} alt={data[0]?.strIngredient10} />
                        <h4 className="text-center">{data[0]?.strIngredient10}</h4>
                        <h5>( {data[0]?.strMeasure10} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient11 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient11 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient11}-small.png`}`} alt={data[0]?.strIngredient11} />
                        <h4 className="text-center">{data[0]?.strIngredient11}</h4>
                        <h5>( {data[0]?.strMeasure11} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient12 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient12 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient12}-small.png`}`} alt={data[0]?.strIngredient12} />
                        <h4 className="text-center">{data[0]?.strIngredient12}</h4>
                        <h5>( {data[0]?.strMeasure12} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient13 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient13 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient13}-small.png`}`} alt={data[0]?.strIngredient13} />
                        <h4 className="text-center">{data[0]?.strIngredient13}</h4>
                        <h5>( {data[0]?.strMeasure13} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient14 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient14 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient14}-small.png`}`} alt={data[0]?.strIngredient14} />
                        <h4 className="text-center">{data[0]?.strIngredient14}</h4>
                        <h5>( {data[0]?.strMeasure14} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient15 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient15 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient15}-small.png`}`} alt={data[0]?.strIngredient15} />
                        <h4 className="text-center">{data[0]?.strIngredient15}</h4>
                        <h5>( {data[0]?.strMeasure15} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient16 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient16 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient16}-small.png`}`} alt={data[0]?.strIngredient16} />
                        <h4 className="text-center">{data[0]?.strIngredient16}</h4>
                        <h5>( {data[0]?.strMeasure16} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient17 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient17 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient17}-small.png`}`} alt={data[0]?.strIngredient17} />
                        <h4 className="text-center">{data[0]?.strIngredient17}</h4>
                        <h5>( {data[0]?.strMeasure17} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient18 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient18 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient18}-small.png`}`} alt={data[0]?.strIngredient18} />
                        <h4 className="text-center">{data[0]?.strIngredient18}</h4>
                        <h5>( {data[0]?.strMeasure18} )</h5>
                    </div> }   
                </li>
                <li className="clearfix">
                    { data[0]?.strIngredient19 &&
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                        <img className="img-fluid" src={`${data[0]?.strIngredient19 == null ? null  : `https://www.themealdb.com/images/ingredients/${data[0]?.strIngredient19}-small.png`}`} alt={data[0]?.strIngredient19} />
                        <h4 className="text-center">{data[0]?.strIngredient19}</h4>
                        <h5>( {data[0]?.strMeasure19} )</h5>
                    </div> }   
                </li>
            </ul>
            </div>
    )
}

export default Ingredients;