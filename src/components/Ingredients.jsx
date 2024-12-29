import React from "react";

const Ingredients = ({data}) => {
    const ingre = [ 
        {
            ingredient: "strIngredient1",
            scale: "strMeasure1"
        },
        {
            ingredient: "strIngredient2",
            scale: "strMeasure2"
        },
        {
            ingredient: "strIngredient3",
            scale: "strMeasure3"
        },
        {
            ingredient: "strIngredient4",
            scale: "strMeasure4"
        },
        {
            ingredient: "strIngredient5",
            scale: "strMeasure5"
        },
        {
            ingredient: "strIngredient6",
            scale: "strMeasure6"
        },
        {
            ingredient: "strIngredient7",
            scale: "strMeasure7"
        },
        {
            ingredient: "strIngredient8",
            scale: "strMeasure8"
        },
        {
            ingredient: "strIngredient9",
            scale: "strMeasure9"
        },
        {
            ingredient: "strIngredient10",
            scale: "strMeasure10"
        },
        {
            ingredient: "strIngredient11",
            scale: "strMeasure11"
        },
        {
            ingredient: "strIngredient12",
            scale: "strMeasure12"
        },
        {
            ingredient: "strIngredient13",
            scale: "strMeasure13"
        },
        {
            ingredient: "strIngredient14",
            scale: "strMeasure14"
        },
        {
            ingredient: "strIngredient15",
            scale: "strMeasure15"
        },
        {
            ingredient: "strIngredient16",
            scale: "strMeasure16"
        },
        {
            ingredient: "strIngredient17",
            scale: "strMeasure17"
        },
        {
            ingredient: "strIngredient18",
            scale: "strMeasure18"
        },
        {
            ingredient: "strIngredient19",
            scale: "strMeasure19"
        },
        {
            ingredient: "strIngredient20",
            scale: "strMeasure20"
        },
    ]
    return (
        <div className="mt-5">
            <h1 className="mb-4">Ingredients: </h1>
            <ul className="list-unstyled row row-cols-2 row-cols-lg-6">
                {ingre.map(item => (
                    <li>
                        { data.map(i => (
                            i[item.ingredient] &&
                            <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                                <img className="img-fluid" src={`${
                                                i[item.ingredient] == null 
                                                ? null  
                                                : `https://www.themealdb.com/images/ingredients/${i[item.ingredient]}-small.png`}`}
                                     alt={i[item.ingredient]} />
                                <h4 className="text-center">{i[item.ingredient]}</h4>
                                <h5>( {i[item.scale]} )</h5>
                            </div>
                        ))}
                    </li>
                ))}

                {/* <li className="clearfix">
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
                </li> */}
            </ul>
            </div>
    )
}

export default Ingredients;