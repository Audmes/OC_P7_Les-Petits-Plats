import { displayfilters } from '../templates/filters.js';
import { displayData } from './recipes.js';
import { displayTotalRecipes } from './counters.js';

export const searchBar = recipes => {
    const searchInput = document.querySelector("input[name='search']");
    const searchButton = document.getElementById('search');
    const clearButton = document.getElementById('clear');
    const list = document.getElementById('cooking__section');

    /* Tags Wrappers */
    const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
    const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
    const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

    // This function clear recipes list
    function clearList() {
        // Clear the list
        list.innerHTML = '';
        
        // Clear Tags
        // tagIngredientWrapper.innerHTML = '';
        // tagApplianceWrapper.innerHTML = '';
        // tagUstensilWrapper.innerHTML = '';
    }

    // This function search and return recipes
    function searchList() {
        const value = searchInput.value;

        // Check: if input exists and if input is larger than 2
        if (value && value.trim().length > 2) {
            // Redefine 'value' to exclude white space and change input to all lowercase
            // value = value.trim().toLowerCase();
            const regex = new RegExp(`${value.trim().toLowerCase()}`);
            
            // Return the results only if the value of the search is included in the recipes name, description and ingredient list
            setList(recipes.filter(recipe => {
                let recipeIsMatching = false;

                const recipeName = recipe.name.trim().toLowerCase();

                if (regex.test(recipeName)) {
                    recipeIsMatching = true;
                } else if (regex.test(recipe.description)) {
                    recipeIsMatching = true;
                }

                // For Recipe Ingredients : listing all ingredients : "ingredient"
                recipe.ingredients.forEach(({ ingredient }) => {
                    const recipeIngredient = ingredient.trim().toLowerCase();

                    if (regex.test(recipeIngredient)) {
                      recipeIsMatching = true;
                    }
                });

                return recipeIsMatching; 

            }));
        } else {
            // input is invalid -- show an error message or show no results
            // Return nothing and display all Recipes
            clearList();
            // Display all recipes
            displayData(recipes);
            // Display total counts recipes
            displayTotalRecipes(recipes);
        }
    }
    

    // This function display a message : not found !
    function noResults() {
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
    function setList(results){
        // clear the list
        clearList();
        // Display recipes
        displayData(results);
        // Display total counts recipes
        displayTotalRecipes(results);
        // Display Filters
        displayfilters(results);

        // If result is no recipe
        if (results.length === 0 ){
            noResults();
        }
    }

    // Clear Button / Clear All
    clearButton.addEventListener("click", () => {
        // Function that removes any previous results from the page
        clearButton.classList.remove('show');
        clearButton.classList.add('hidden');
        searchInput.value = '';
        // Clear all
        clearList();
        // Display all recipes
        displayData(recipes);
        // Display total counts recipes
        displayTotalRecipes(recipes);
        // Display Filters
        displayfilters(recipes);
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
    searchButton.addEventListener("click", searchList);

    // Keyup
    searchInput.addEventListener('keyup', e => {
        switch(e.key) {
            case 'Enter':
                searchList();
                break;
        }
    });

    // Or if you prefer to use a research with Input event 
    
    // Search Input event "keyup"
    // let typingTimer;
    // const typeInterval = 100;

    // searchInput.addEventListener('keyup', () => {
    //     clearTimeout(typingTimer);
    //     typingTimer = setTimeout(searchList(), typeInterval);
    // });
}
