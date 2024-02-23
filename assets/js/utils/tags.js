/**
* Les Petits Plats JS : Add Tags Filters
**/
import { recipes } from '../../datas/recipes.js';
import { createTag } from '../templates/tags.js';

/* Tags Wrappers */
const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

/* Tags Already Added */
const tagIngredientAlreadyAdded = [];
const tagApplianceAlreadyAdded = [];
const tagUstensilAlreadyAdded = [];

/* Add Tag Filter for Ingredients */
export const addTagFilterIngredients = tags => {
    tags.forEach(tag => {
        const itemTag = createTag(tag);
        const deleteIconImg = document.createElement('span');
        deleteIconImg.classList.add('delete');
        deleteIconImg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="deleteIcon" width="14" height="14" viewBox="0 0 14 13" fill="none">
                <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        itemTag.classList.add('tag__ingredient');
        itemTag.classList.add('hidden');
        tagIngredientWrapper.appendChild(itemTag);
        itemTag.appendChild(deleteIconImg);

        deleteIconImg.addEventListener('click', (e) => {
            let listSelected = document.getElementsByClassName('selected');
            // console.log(listSelected);
            // console.log(e.currentTarget.parentElement.innerText);
            let targetParent = e.currentTarget.parentElement;
            let text = targetParent.innerText.trim().toLowerCase();
            // console.log(text);
            let li;
            for(let val of listSelected) {
                if(val.innerText.trim().toLowerCase() == text) {
                    li = val;
                    li.classList.remove('selected');
                    li.children[0].classList.add('hidden');
                }
            }

            let target = e.currentTarget.parentElement;
            target.classList.add('hidden');
            target.classList.remove('active');

            const index = tagIngredientAlreadyAdded.indexOf(text);
            tagIngredientAlreadyAdded.splice(index, 1);

            displayRecipesWithTags(recipes);
            // searchList();
            // return false;
        });
        // searchList();
    });
}

/* Add Tag Filter for Appliances */
export const addTagFilterAppliances = tags => {
    tags.forEach(tag => {
        const itemTag = createTag(tag);
        const deleteIconImg = document.createElement('span');
        deleteIconImg.classList.add('delete');
        deleteIconImg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="deleteIcon" width="14" height="14" viewBox="0 0 14 13" fill="none">
                <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        itemTag.classList.add('tag__appliance');
        itemTag.classList.add('hidden');
        tagApplianceWrapper.appendChild(itemTag);
        itemTag.appendChild(deleteIconImg);

        deleteIconImg.addEventListener('click', (e) => {
            let listSelected = document.getElementsByClassName('selected');
            let targetParent = e.currentTarget.parentElement;
            let text = targetParent.innerText.trim().toLowerCase();

            let li;
            for(let val of listSelected) {
                if(val.innerText.trim().toLowerCase() == text) {
                    li = val;
                    li.classList.remove('selected');
                    li.children[0].classList.add('hidden');
                }
            }

            let target = e.currentTarget.parentElement;
            target.classList.add('hidden');
            target.classList.remove('active');

            const index = tagApplianceAlreadyAdded.indexOf(text);
            tagApplianceAlreadyAdded.splice(index, 1);

            displayRecipesWithTags(recipes);
            // searchList();
            // return false;
        });
        // searchList();
    });
}

/* Add Tag Filter for Ustensils */
export const addTagFilterUstensils = tags => {
    tags.forEach(tag => {
        const itemTag = createTag(tag);
        const deleteIconImg = document.createElement('span');
        deleteIconImg.classList.add('delete');
        deleteIconImg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="deleteIcon" width="14" height="14" viewBox="0 0 14 13" fill="none">
                <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        itemTag.classList.add('tag__ustensil');
        itemTag.classList.add('hidden');
        tagUstensilWrapper.appendChild(itemTag);
        itemTag.appendChild(deleteIconImg);

        deleteIconImg.addEventListener('click', (e) => {
            let listSelected = document.getElementsByClassName('selected');
            let targetParent = e.currentTarget.parentElement;
            let text = targetParent.innerText.trim().toLowerCase();

            let li;
            for(let val of listSelected) {
                if(val.innerText.trim().toLowerCase() == text) {
                    li = val;
                    li.classList.remove('selected');
                    li.children[0].classList.add('hidden');
                }
            }

            let target = e.currentTarget.parentElement;
            target.classList.add('hidden');
            target.classList.remove('active');

            const index = tagUstensilAlreadyAdded.indexOf(text);
            tagUstensilAlreadyAdded.splice(index, 1);

            displayRecipesWithTags(recipes);
            // searchList();
            // return false;
        });
        // searchList();
    });
}

/* Display Tags */
export const displayTags = () => { 
    const filterItemIngredients = [...document.getElementsByClassName('filter__ingredients--items')];
    const filterItemAppliances = [...document.getElementsByClassName('filter__appliances--items')];
    const filterItemUstensils = [...document.getElementsByClassName('filter__ustensils--items')];

    /* Filter Items Ingredient */
    filterItemIngredients.forEach(element => {
        let text = element.innerText.trim().toLowerCase();

        element.addEventListener('click', (e) => {

            let tagsIngredient = document.getElementsByClassName('tag__ingredient');

            // const test = element.innerText.trim().toLowerCase();
            // console.log(test);

            // const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText.trim().toLowerCase()).filter((tag) => tag.includes(text));

            let tag;
            let target = e.currentTarget;

            if(tagIngredientAlreadyAdded.includes(text) === false) {

                    tagIngredientAlreadyAdded.push(text);
                    target.classList.add('selected');
                    target.children[0].classList.remove('hidden');

                    for(let val of tagsIngredient) {
                        if(val.innerText.trim().toLowerCase() == text) {
                            tag = val;
                            tag.classList.remove('hidden');
                            tag.classList.add('active');
                        }
                    }

                    displayRecipesWithTags(recipes);
            }else {

                target.classList.remove('selected');
                target.children[0].classList.add('hidden');

                for(let val of tagsIngredient) {
                    if(val.innerText.trim().toLowerCase() == text) {
                        tag = val;
                        tag.classList.add('hidden');
                        tag.classList.remove('active');
                    }
                }
                const nameTag = tag.innerText.trim().toLowerCase();

                const index = tagIngredientAlreadyAdded.indexOf(nameTag);
                tagIngredientAlreadyAdded.splice(index, 1);

                displayRecipesWithTags(recipes);
            }
        });
    });

    /* Filter Items Appliance */
    filterItemAppliances.forEach(element => {
        let text = element.innerText.trim().toLowerCase();

        element.addEventListener('click', (e) => {
            let tagsAppliance = document.getElementsByClassName('tag__appliance');
            let tag;
            let target = e.currentTarget;

            if(tagApplianceAlreadyAdded.includes(text) === false) {
                    tagApplianceAlreadyAdded.push(text);
                    target.classList.add('selected');
                    target.children[0].classList.remove('hidden');

                    for(let val of tagsAppliance) {
                        if(val.innerText.trim().toLowerCase() == text) {
                            tag = val;
                            tag.classList.remove('hidden');
                            tag.classList.add('active');
                        }
                    }

                    displayRecipesWithTags(recipes);
            }else {
                target.classList.remove('selected');
                target.children[0].classList.add('hidden');

                for(let val of tagsAppliance) {
                    if(val.innerText.trim().toLowerCase() == text) {
                        tag = val;
                        tag.classList.add('hidden');
                        tag.classList.remove('active');
                    }
                }

                const nameTag = tag.innerText.trim().toLowerCase();

                const index = tagApplianceAlreadyAdded.indexOf(nameTag);
                tagApplianceAlreadyAdded.splice(index, 1);

                displayRecipesWithTags(recipes);
            }
        });
    });

    /* Filter Items Ustensil */
    filterItemUstensils.forEach(element => {
        let text = element.innerText.trim().toLowerCase();

        element.addEventListener('click', (e) => {
            let tagsUstensil = document.getElementsByClassName('tag__ustensil');
            let tag;
            let target = e.currentTarget;

            if(tagUstensilAlreadyAdded.includes(text) === false) {
                    tagUstensilAlreadyAdded.push(text);
                    target.classList.add('selected');
                    target.children[0].classList.remove('hidden');

                    for(let val of tagsUstensil) {
                        if(val.innerText.trim().toLowerCase() == text) {
                            tag = val;
                            tag.classList.remove('hidden');
                            tag.classList.add('active');
                        }
                    }

                    displayRecipesWithTags(recipes);
            }else {
                target.classList.remove('selected');
                target.children[0].classList.add('hidden');

                for(let val of tagsUstensil) {
                    if(val.innerText.trim().toLowerCase() == text) {
                        tag = val;
                        tag.classList.add('hidden');
                        tag.classList.remove('active');
                    }
                }
                const nameTag = tag.innerText.trim().toLowerCase();

                const index = tagUstensilAlreadyAdded.indexOf(nameTag);
                tagUstensilAlreadyAdded.splice(index, 1);

                displayRecipesWithTags(recipes);
            }
        });
    });
}

/* Display Recipes with Tags */
export const displayRecipesWithTags = recipes => {
    // console.log(recipes);

    /* Faire des tableaux des items afficher pour chaque filtre */ 
    const taggedIngredientsDOM = Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient.active'));
    // console.log(taggedIngredientsDOM);
    const taggedAppliancesDOM = Array.from(document.querySelectorAll('.tag__appliances--wrapper .tag__appliance.active'));
    // console.log(taggedAppliancesDOM);
    const taggedustensilsDOM = Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil.active'));
    // console.log(taggedustensilsDOM);

    let recipesToDisplay = [];

    let taggedIngredients = [];
    let taggedAppliances = [];
    let taggedUstensils = [];

    /* Créer des tableaux avec map contenant le texte de chaque tableau */
    taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
    // console.log(taggedIngredients);
    taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
    taggedUstensils = taggedustensilsDOM.map((taggedUstensil) => taggedUstensil.innerText.trim().toLowerCase());

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
        // console.log(ingredientsInTheRecipe);

        appliancesInTheRecipe.push(recipe.appliance);
        ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil.trim().toLowerCase());

        if(taggedIngredients.length > 0) {
            taggedIngredients.forEach((taggedIngredient) => {
                // console.log(taggedIngredient);
                // if (ingredientsInTheRecipe.filter((ingredient) => ingredient.includes(taggedIngredient))) {
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

    console.log(recipesToDisplay);
    return recipesToDisplay;
}