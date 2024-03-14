import { displayfilters } from '../templates/filters.js';
import { displayRecipes } from './recipes.js';
import { displayTotalRecipes } from './counters.js';
import { displayTags } from './tags.js';

const searchInput = document.querySelector("input[name='search']");
const list = document.getElementById('cooking__section');

// This function display a message : not found !
export function noResults() {
    // Get Input value
    const searchInputValue = searchInput.value;
    // create an element for the error; a list item ("li")
    const error = document.createElement('p');
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message');

    // creating text for our element
    // const text = document.createTextNode('No results found. Sorry!');
    error.innerHTML = `
        Aucune recette ne contient <strong>`+searchInputValue+`</strong>, vous pouvez chercher « tarte aux pommes », « poisson », etc.
    `;
    // appending the text to our element
    // error.appendChild(text);
    // appending the error to our list element
    list.appendChild(error);
}

// This function display list of recipes
// setList takes in a param of "results"
export function setList(results) {
    // tagIngredientAlreadyAdded.length = 0;
    // tagIngredientAlreadyAdded.splice(0); 
    // tagApplianceAlreadyAdded.splice(0);
    // tagUstensilAlreadyAdded.splice(0);
    
    const ingredientsInput = document.getElementById('ingredients-input');
    const appliancesInput = document.getElementById('appliances-input');
    const ustensilsInput = document.getElementById('ustensils-input');
    
    ingredientsInput.value = '';
    appliancesInput.value = '';
    ustensilsInput.value = '';

    // Display recipes
    displayRecipes(results);
    // Display total counts recipes
    displayTotalRecipes(results);
    // Display Filters
    displayfilters(results);
    // Display Tags
    displayTags(results);

    // If result is no recipe
    if (results.length === 0 ){
        noResults();
    }
}

// This function search and return recipes
export const searchList = recipes => {
    
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
            } else if (regex.test(recipe.description.trim().toLowerCase())) {
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
    
    }else {
        // Return nothing and display all Recipes
        setList(recipes);
    }
};

export const searchListWithTags = recipes => {
    let tagsUsed = false;
    let recipesToDisplay = [];

    if(Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient.active')).length > 0
    || Array.from(document.querySelectorAll('.tag__appliances--wrapper .tag__appliance.active')).length > 0
    || Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil.active')).length > 0) {
        tagsUsed = true;

        /* Faire des tableaux des items afficher pour chaque filtre */ 
        const taggedIngredientsDOM = Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient.active'));
        const taggedAppliancesDOM = Array.from(document.querySelectorAll('.tag__appliances--wrapper .tag__appliance.active'));
        const taggedustensilsDOM = Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil.active'));
        // console.log(taggedIngredientsDOM);
        // console.log(taggedAppliancesDOM);
        // console.log(taggedustensilsDOM);

        let taggedIngredients = [];
        let taggedAppliances = [];
        let taggedUstensils = [];

        /* Créer des tableaux avec map contenant le texte de chaque tableau */
        taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText.trim().toLowerCase());
        taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
        taggedUstensils = taggedustensilsDOM.map((taggedUstensil) => taggedUstensil.innerText.trim().toLowerCase());
        // console.log(taggedIngredients);
        // console.log(taggedAppliances);
        // console.log(taggedUstensils);
        
        /* Définir le tableau recipesToDisplay un filtre de recipes */
        recipesToDisplay = recipes.filter((recipe) => {

            let recipeIsMatching = false;
            let ingredientIsMatching = false;
            let applianceIsMatching = false;
            let ustensilIsMatching = false;

            let ingredientsMatching = 0;
            let appliancesMatching = 0;
            let ustensilsMatching = 0;

            let ingredientsInTheRecipe = [];
            let appliancesInTheRecipe = [];
            let ustensilsInTheRecipe = [];

            ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient.trim().toLowerCase());
            // appliancesInTheRecipe.push(recipe.appliance);
            appliancesInTheRecipe = recipe.appliance;
            ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil.trim().toLowerCase());

            if(taggedIngredients.length > 0) {
                taggedIngredients.forEach((taggedIngredient) => {
                        taggedIngredient.trim().toLowerCase();
                    if (ingredientsInTheRecipe.includes(taggedIngredient)) {
                        ingredientsMatching += 1;
                    }
                });
            }

            if(taggedAppliances.length > 0) {
                taggedAppliances.forEach((taggedAppliance) => {
                    taggedAppliance.trim().toLowerCase();
                    if (appliancesInTheRecipe.includes(taggedAppliance)) {
                        appliancesMatching += 1;
                    }
                });
            }

            if (taggedUstensils.length > 0) {
                taggedUstensils.forEach((taggedUstensil) => {
                    taggedUstensil.trim().toLowerCase();
                    if (ustensilsInTheRecipe.includes(taggedUstensil)) {
                        ustensilsMatching += 1;
                    }
                });
            }

            if (ingredientsMatching === taggedIngredients.length) {
                ingredientIsMatching = true;
            }
            
            // if (appliancesMatching === taggedAppliances.length) {
            //     applianceIsMatching = true;
            // }
            if (taggedAppliances.length > 0) {
                if (appliancesMatching > 0) {
                    applianceIsMatching = true;
                }
            } else applianceIsMatching = true;
        
            if (ustensilsMatching === taggedUstensils.length) {
                ustensilIsMatching = true;
            }
        
            if ((ingredientIsMatching === true) && (applianceIsMatching === true) && (ustensilIsMatching === true)) {
                recipeIsMatching = true;
            }

            return recipeIsMatching;
        });
        console.log('recipesToDisplay :');
        console.log(recipesToDisplay);

        // Display recipes To Display
        displayRecipes(recipesToDisplay);
        // // Display total counts recipes
        displayTotalRecipes(recipesToDisplay);

        // Récupérer tous les filtres du DOM
        const ingredientsFilters = Array.from(document.querySelectorAll('.filter__ingredients--items'));
        const appliancesFilters = Array.from(document.querySelectorAll('.filter__appliances--items'));
        const ustensilsFilters = Array.from(document.querySelectorAll('.filter__ustensils--items'));
        console.log('Tous les filtres du DOM :');
        console.log(appliancesFilters);

        // Récupérer les filtres du nouveau Tableau des recettes
        const ingredientsList = [];
        const appliancesList = [];
        const ustensilsList = [];

        // On récupère tous les ingredients, appliances et ustensils des recettes à afficher
        recipesToDisplay.forEach((recipe) => {
            /** Ingredients **/
            recipe.ingredients.forEach(({ ingredient }) => { 
                const ingredientRegex = ingredient.trim().toLowerCase();
                if (ingredientsList.includes(ingredientRegex) === false) {
                    ingredientsList.push(ingredientRegex);
                }
            });

            /** appliances **/
            const applianceRegex = recipe.appliance.trim().toLowerCase();
            if (appliancesList.includes(applianceRegex) === false) {
                appliancesList.push(applianceRegex);
            }

            /** ustensils **/
            recipe.ustensils.forEach((ustensil) => {
                const ustensilRegex = ustensil.trim().toLowerCase();
                if (ustensilsList.includes(ustensilRegex) === false) {
                    ustensilsList.push(ustensilRegex);
                }
            });
        });

        /* Display New Recipes Filters */ /* Affichage des Nouveaux filtres */
        const ingredientsToDisplay = ingredientsFilters.filter(item => ingredientsList.includes(item.innerText.trim().toLowerCase()));
        const ingredientsNotDisplay = ingredientsFilters.filter(item => ingredientsList.includes(item.innerText.trim().toLowerCase()) === false );
        const appliancesToDisplay = appliancesFilters.filter(item => appliancesList.includes(item.innerText.trim().toLowerCase()));
        const appliancesNotDisplay = appliancesFilters.filter(item => appliancesList.includes(item.innerText.trim().toLowerCase()) === false );
        const ustensilsToDisplay = ustensilsFilters.filter(item => ustensilsList.includes(item.innerText.trim().toLowerCase()));
        const ustensilsNotDisplay = ustensilsFilters.filter(item => ustensilsList.includes(item.innerText.trim().toLowerCase()) === false );

        ingredientsToDisplay.forEach((app) => app.classList.remove('hidden'));
        ingredientsNotDisplay.forEach((app) => app.classList.add('hidden'));

        appliancesToDisplay.forEach((app) => app.classList.remove('hidden'));
        appliancesNotDisplay.forEach((app) => app.classList.add('hidden'));

        ustensilsToDisplay.forEach((app) => app.classList.remove('hidden'));
        ustensilsNotDisplay.forEach((app) => app.classList.add('hidden'));

        // If result is no recipe
        if (recipesToDisplay.length === 0 ){
            noResults();
        }

    }else {
        // Return nothing and display all Recipes
        setList(recipes);
    }
};