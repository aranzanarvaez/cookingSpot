import React, { useState } from "react";
import axios from "axios";


function Opciones() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&query=${query}&addRecipeInformation=true`;
    const response = await axios.get(url);
    setRecipes(response.data.results);
    setQuery("");
  };

  const handleSelectRecipe = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=e0bdc9565d104e2ea5a80893da61d2be`;
    const response = await axios.get(url);
    setSelectedRecipe(response.data);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  const handleCategory = async (category) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&type=${category}&addRecipeInformation=true`;
    const response = await axios.get(url);
    setRecipes(response.data.results);
  };

  if (selectedRecipe) {
    return (
      <div className="menu-item bg-white shadow-on-hover">
        <img className="mt-5" src={selectedRecipe.image} alt={selectedRecipe.title} />
        <div class="menu-item-content p-4">
        <h2>{selectedRecipe.title}</h2>
       
        <h3>Ingredients:</h3>
        <ul>
          {selectedRecipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
            
          ))}
        </ul>

        <div className="instructions">
          <h3>Instructions:</h3>
          <div dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }} />
        </div>
        

        
        
        </div>
        <button className="btn btn-secondary mb-5" onClick={handleBack}>Back to recipe list</button>
      </div>
    );
  }

  return (
    <section id="menu" className="bg-light mb-5">
    <div className="container">
      <h1>Explore more recipes</h1>
      <p>Choose between the different options that we deploy.</p>
    <ul className="nav nav-pills mt-5 mb-5 justify-content-center"
             id="pills-tab" 
             role="tablist"> 

      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true"  onClick={() => handleCategory("breakfast")}>Breakfast</button>
       </li>
       <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true" onClick={() => handleCategory("main course")}>Lunch</button>
        </li>
        <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true"  onClick={() => handleCategory("side dish")}>Dinner</button>
        </li>
        <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true" onClick={() => handleCategory("snack")}>Snacks</button>
        </li>

      </ul>
      <ul className="recipe-list">
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
            <div className="row gy-4 mt-4">
            <div className="menu-item shadow-on-hover mt-4">
                {recipes.map((recipe) => (
                <div className="menu-item bg-white shadow-on-hover mt-4" key={recipe.id}>
                   <img className="mt-4"src={recipe.image} alt={recipe.title} />
                    <div class="menu-item-content p-4 mt-4">
                    <h2>{recipe.title}</h2>
                    <button className="view-button btn btn-secondary" onClick={() => handleSelectRecipe(recipe.id)}>See full recipe</button>
                    </div>
                </div>
                ))}
                </div>
                </div>
            </div>
            </div>
      </ul>
    </div>
    </section>
  );
}

export default Opciones;
