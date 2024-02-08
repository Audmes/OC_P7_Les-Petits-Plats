import './utils/filters.js';
import { recipes } from '../datas/recipes.js';
import { displayRecipes } from './templates/recipes.js';
import { searchBar } from './utils/searchbar.js';
import { displayTotalRecipes } from './utils/counters.js';
import { displayfilters } from './templates/filters.js';
import { displayTags } from './templates/tags.js';

const displayPage = async () => {
    // SearchBar
    searchBar(recipes);
    
    // Display Filters
    displayfilters(recipes);

    // Display Tags
    displayTags(recipes);
    
    // Display Recipes
    displayRecipes(recipes);
    displayTotalRecipes(recipes);
};

displayPage();