import './utils/filters.js';
import { recipes } from '../datas/recipes.js';
import { displayData } from './utils/recipes.js';
import { searchBar } from './utils/searchbar.js';
import { displayTotalRecipes } from './utils/counters.js';
import { displayfilters } from './templates/filters.js';
import { displayTags } from './utils/tags.js';

// let recipes = [];

async function getData() {
//   const response = await fetch ('data/recipes.json');
//   recipes = (await response.json()).recipes;
  init();
}

function init() {
    /* Afficher les recipes */ 
    displayData(recipes);
    displayTotalRecipes(recipes);

    // SearchBar
    searchBar(recipes);
    
    /* Afficher les filtres */
    displayfilters(recipes);

    /* Afficher les tags */
    displayTags(recipes);
}

getData();