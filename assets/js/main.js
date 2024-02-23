import './utils/filters.js';
import { recipes } from '../datas/recipes.js';
import { displayRecipes } from './utils/recipes.js';
import { searchBar } from './utils/searchbar.js';
import { displayTotalRecipes } from './utils/counters.js';
import { displayfilters } from './templates/filters.js';
import { displayTags, displayRecipesWithTags } from './utils/tags.js';

// let recipes = [];

async function getData() {
//   const response = await fetch ('data/recipes.json');
//   recipes = (await response.json()).recipes;
    init();
}

function init() {
    /* Display recipes */ 
    displayRecipes(recipes);
    /* Display Counter */
    displayTotalRecipes(recipes);
    // SearchBar
    searchBar(recipes);
    /* Display Filters */
    displayfilters(recipes);
    /* Display tags */
    displayTags();
    /* Display filtered recipes with Tags */
    displayRecipesWithTags(recipes);
}

getData();