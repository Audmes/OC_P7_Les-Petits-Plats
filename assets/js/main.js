import './utils/filters.js';
import { recipes } from '../datas/recipes.js';
import { displayRecipes } from './templates/recipes.js';
import { searchBar } from './utils/searchbar.js';
import { displayTotalRecipes } from './utils/counters.js';

const displayPage = async () => {
    // SearchBar
    searchBar(recipes);
    // Affichage des Recettes
    displayRecipes(recipes);
    displayTotalRecipes(recipes);
};

displayPage();