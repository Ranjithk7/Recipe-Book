import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import BrowseMeals from "./components/BrowseMeals";
import Recipe from "./components/Recipe";
import NotFoundPage from './components/NotFoundPage'

const App = () => {         
    return (
        <div className="">
            <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<RecipeList />}/>
                <Route path='/recipe' element={<RecipeList />}/>
                <Route path='/recipe/meal/letter/:letter' element={<RecipeList />}/>
                <Route path='/recipe/meal/name/:name' element={<Recipe />}/>
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
            <BrowseMeals />
            </Router>
            
        </div>
    )
}

export default App;
