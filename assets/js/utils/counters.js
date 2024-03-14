// Affichage du total des Recettes
export const displayTotalRecipes = recipes => {
    const totalSection = document.querySelector('.filters__title');
    totalSection.innerHTML = '';

    const totalRecipes = recipes.length;
    const h2 = document.createElement('h2');

    if (totalRecipes < 2 ) {
        h2.innerHTML = `
            `+totalRecipes+` recette
        `;

    }else {
        h2.innerHTML = `
            `+totalRecipes+` recettes
        `;
    }

    return totalSection.appendChild(h2);
};