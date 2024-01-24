import { displayRecipes } from '../templates/recipes.js';
import { displayTotalRecipes } from './counters.js';

export const searchBar = recipes => {
    const searchInput = document.querySelector("input[name='search']");
    const searchButton = document.getElementById('search');
    const clearButton = document.getElementById('clear');
    const list = document.getElementById('list');

    // Clear List
    function clearList() {
        // Clear the list
        list.innerHTML = '';
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
        displayRecipes(recipes);
        // Display total counts recipes
        displayTotalRecipes(recipes);
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
    searchButton.addEventListener("click", () => {

        let value = searchInput.value;
        const searchButton = document.getElementById('search');

        // Check: if input exists and if input is larger than 2
        if (value && value.trim().length > 2) {
            // Redefine 'value' to exclude white space and change input to all lowercase
            value = value.trim().toLowerCase();
            
            // Return the results only if the value of the search is included in the recipes name, description and ingredient list
            setList(recipes.filter(recipe => {

                // For Recipe Name
                // const name = recipe.name;
                // const nameR = recipe.name.includes(value);
                // console.log(name);
                // console.log(nameR);

                // For Recipe Description
                // const description = recipe.description;
                // const descriptionR = recipe.description.includes(value);
                // console.log(description);
                // console.log(descriptionR);

                // For Recipe Ingredients : listing all ingredients : "ingredient"
                const ingredients = recipe.ingredients.map(function (recipe) {
                    return recipe["ingredient"]; 
                });
                // console.log(ingredients);

                // Ingredients Tab with ingredient includes value
                const ingredientsFiltres = ingredients.filter(ingredient => {
                    const ingredientsTab = ingredient.trim().toLowerCase();
                    
                    return ingredientsTab.includes(value);
                });
                // console.log(ingredientsFiltres);

                return recipe.name.includes(value)+recipe.description.includes(value)+ingredientsFiltres.includes(value);
            }));
        } else {
            // input is invalid -- show an error message or show no results
            // Return nothing and display all Recipes
            clearList();
            // Display all recipes
            displayRecipes(recipes);
            // Display total counts recipes
            displayTotalRecipes(recipes);
        }
    });

    // No Results
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

    // SetList
    // setList takes in a param of "results"
    function setList(results){
        // clear the list
        clearList();
        // Display recipes
        displayRecipes(results);
        // Display total counts recipes
        displayTotalRecipes(results);

        // If result is no recipe
        if (results.length === 0 ){
            noResults();
        }
    }
}