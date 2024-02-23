import { displayfilters } from '../templates/filters.js';
import { displayRecipes } from './recipes.js';
import { displayTotalRecipes } from './counters.js';

import { displayTags, displayRecipesWithTags } from './tags.js';

const list = document.getElementById('cooking__section');

/* Tags Wrappers */
const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

// This function clear recipes list
export function clearList() {
    // Clear the list
    list.innerHTML = '';
    
    // Clear Tags 
    //Si on supprime les tags faut aussi supprimer dans la liste le selected et vider le tableau !!!!!!!!!
    // Gérer le comportement de la searchBar si l'utilisateur supprime au clavier sa recherche. qu'est ce qu'il se passe?
    // Pourquoi je dois double cliquer ??? pour que le li soit selectionné ?
    tagIngredientWrapper.innerHTML = '';
    tagApplianceWrapper.innerHTML = '';
    tagUstensilWrapper.innerHTML = '';
}

// This function display a message : not found !
export function noResults() {
    // create an element for the error; a list item ("li")
    const error = document.createElement('li');
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message');

    // creating text for our element
    const text = document.createTextNode('No results found. Sorry!');
    // appending the text to our element
    error.appendChild(text);
    // appending the error to our list element
    list.appendChild(error);
}

// This function display list of recipes
// setList takes in a param of "results"
export function setList(results) {
    // clear the list
    clearList();
    // Display recipes
    displayRecipes(results);
    // Display total counts recipes
    displayTotalRecipes(results);
    // Display Filters
    displayfilters(results);
    // Display Tags
    displayTags();
    // Display Recipes with Tags
    displayRecipesWithTags(results);

    // If result is no recipe
    if (results.length === 0 ){
        noResults();
    }
}

