/**
* Les Petits Plats JS : Filters Template
**/
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
        // if tags already used, don't push it.
        const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText);
        
        recipe.ingredients.forEach(({ ingredient }) => {
            let ingredientRegex = ingredient.trim().toLowerCase();

            if (ingredientsList.includes(ingredientRegex) === false && itags.includes(ingredientRegex) === false) {
                ingredientsList.push(ingredientRegex);
                const filterItem = document.createElement('li');
                filterItem.classList.add('filter__ingredients--items');
                filterItem.innerText = ingredient;
                ingredientsBloc.appendChild(filterItem);
            }
        });

        /** appliances **/
        // if tags already used, don't push it.
        const atags = [...document.querySelectorAll('.tag__appliance')].map( (atag) => atag.innerText);

        if (appliancesList.includes(recipe.appliance) === false && atags.includes(recipe.appliance) === false) {
            appliancesList.push(recipe.appliance);
            const filterItem = document.createElement('li');
            filterItem.classList.add('filter__appliances--items');
            filterItem.innerText = recipe.appliance;
            appliancesBloc.appendChild(filterItem);
        }

        /** ustensils **/
        // if tags already used, don't push it.
        const utags = [...document.querySelectorAll('.tag__ustensil')].map( (utag) => utag.innerText)
        recipe.ustensils.forEach((ustensil) => {
        if (ustensilsList.includes(ustensil) === false && utags.includes(ustensil) === false) {
            ustensilsList.push(ustensil);
            const filterItem = document.createElement('li');
            filterItem.classList.add('filter__ustensils--items');
            filterItem.innerText = ustensil;
            ustensilsBloc.appendChild(filterItem);
        } 
        });
    });
};