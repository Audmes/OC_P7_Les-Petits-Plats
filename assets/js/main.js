import './utils/filters.js';
import { recipes } from '../datas/recipes.js';
// import { displayRecipes } from './utils/recipes.js';
import { setList, searchList } from './utils/search.js';
// import { displayTotalRecipes } from './utils/counters.js';
// import { displayfilters } from './templates/filters.js';
// import { displayTags } from './utils/tags.js';

const searchInput = document.querySelector("input[name='search']");
const searchButton = document.getElementById('search');
const clearButton = document.getElementById('clear');

// let recipes = [];

// async function getData() {
// //   const response = await fetch ('data/recipes.json');
// //   recipes = (await response.json()).recipes;
//     init();
// }

// function init() {
//     /* Display recipes */ 
//     displayRecipes(recipes);
//     /* Display Counter */
//     displayTotalRecipes(recipes);
//     // Search
//     // searchList(recipes);
//     /* Display Filters */
//     displayfilters(recipes);
//     /* Display tags */
//     displayTags(recipes);
//     /* Display filtered recipes with Tags */
//     // displayRecipesWithTags(recipes);
// }

// getData();

// Clear Button / Clear All
clearButton.addEventListener("click", () => {
    // Function that removes any previous results from the page
    clearButton.classList.remove('show');
    clearButton.classList.add('hidden');
    searchInput.value = '';

    setList(recipes);
});

// Clear Input : Clear Button hidden / Show
searchInput.addEventListener("input", () => {
    if(!searchInput.value == '') {
        clearButton.classList.remove('hidden');
        clearButton.classList.add('show');
    }else {
        clearButton.classList.remove('show');
        clearButton.classList.add('hidden');
    }
});

// Search Button event "click"
searchButton.addEventListener("click", searchList(recipes));

// Keyup
searchInput.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'Enter':
            searchList(recipes);
            break;
    }
});

/* Or if you prefer to use a research with Input event */
// Search Input event "keyup"
// let typingTimer;
// const typeInterval = 100;

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(searchList(), typeInterval);
// });