import { createRecipe } from '../templates/recipes.js';
/*** Afficher les cards ***/
export const displayRecipes = recipes => {
    const recipeSection = document.getElementById('cooking__section');
    recipeSection.innerHTML = '';
  
    for (const recipe of recipes) {
      /* createRecipe is defined in recipes.js */
      const recipeCard = createRecipe(recipe);
      recipeSection.appendChild(recipeCard);
    }
};