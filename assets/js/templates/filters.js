/**
* Les Petits Plats JS : Filters Template
**/
import { addTagFilterIngredients, addTagFilterAppliances, addTagFilterUstensils } from "../utils/tags.js";

export const displayfilters = recipes => {
    const ingredientsBloc = document.getElementById('filter__ingredients');
    const appliancesBloc = document.getElementById('filter__appliances');
    const ustensilsBloc = document.getElementById('filter__ustensils');

    const ingredientsList = [];
    const appliancesList = [];
    const ustensilsList = [];

    ingredientsBloc.innerHTML = '';
    appliancesBloc.innerHTML = '';
    ustensilsBloc.innerHTML = '';

    recipes.forEach((recipe) => {
        /** Ingredients **/
        recipe.ingredients.forEach(({ ingredient }) => {
            let ingredientRegex = ingredient.trim().toLowerCase();

            if (ingredientsList.includes(ingredientRegex) === false) {
                ingredientsList.push(ingredientRegex);
                const filterItem = document.createElement('li');
                filterItem.classList.add('filter__ingredients--items');
                filterItem.innerText = ingredient;
                ingredientsBloc.appendChild(filterItem);

                const span = document.createElement('span');
                span.classList.add('delete');
                span.classList.add('hidden');
                // svg.setAttribute('width', '17');
                // svg.setAttribute('height', '17');
                // svg.setAttribute('viewBox', '0 0 17 17');
                // svg.setAttribute('fill', 'none');
                // svg.classList.add('deleteIcon');
                // svg.classList.add('delete');
                span.innerHTML = `
                    <svg class="deleteIcon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                        <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
                filterItem.appendChild(span);
            }
        });

        /** appliances **/
        if (appliancesList.includes(recipe.appliance) === false) {
            appliancesList.push(recipe.appliance);
            const filterItem = document.createElement('li');
            filterItem.classList.add('filter__appliances--items');
            filterItem.innerText = recipe.appliance;
            appliancesBloc.appendChild(filterItem);

            const span = document.createElement('span');
            span.classList.add('delete');
            span.classList.add('hidden');
            span.innerHTML = `
                <svg class="deleteIcon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            filterItem.appendChild(span);
        }

        /** ustensils **/
        // if tags already used, don't push it.
        recipe.ustensils.forEach((ustensil) => {
            if (ustensilsList.includes(ustensil) === false) {
                ustensilsList.push(ustensil);
                const filterItem = document.createElement('li');
                filterItem.classList.add('filter__ustensils--items');
                filterItem.innerText = ustensil;
                ustensilsBloc.appendChild(filterItem);

                const span = document.createElement('span');
                span.classList.add('delete');
                span.classList.add('hidden');
                span.innerHTML = `
                    <svg class="deleteIcon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                        <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
                filterItem.appendChild(span);
            } 
        });
    });

    /* Variable défini dans tags.js */
    addTagFilterIngredients(ingredientsList);

    addTagFilterAppliances(appliancesList);

    addTagFilterUstensils(ustensilsList);
};