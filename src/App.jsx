// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import BrowseMeals from "./components/BrowseMeals";
import Recipe from "./components/Recipe";
import NotFoundPage from './components/NotFoundPage'
import Home from "./pages/Home";

const App = () => {         
    return (
        <div className="">
            <Router>
                <Nav />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/recipe' element={<RecipeList />}/>
                <Route path='/recipe/meal/letter/:letter' element={<RecipeList />}/>
                <Route path='/recipe/meal/category/:category' element={<RecipeList />}/>
                <Route path='/recipe/meal/country/:country' element={<RecipeList />}/>
                <Route path='/recipe/meal/name/:name' element={<Recipe />}/>
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
            <BrowseMeals />
            </Router>
            
        </div>
    )
}

export default App;
