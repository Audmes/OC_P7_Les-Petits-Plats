import { createRecipe } from '../templates/recipes.js';
/*** Afficher les cards ***/
export const displayRecipes = recipes => {
    const recipeSection = document.getElementById('cooking__section');
    recipeSection.innerHTML = '';
  
    for (const recipe of recipes) {
      /* getRecipeCard is defined in recipes_cards.js */
      // eslint-disable-next-line no-undef
      const recipeCard = createRecipe(recipe);
      recipeSection.appendChild(recipeCard);
    }
}