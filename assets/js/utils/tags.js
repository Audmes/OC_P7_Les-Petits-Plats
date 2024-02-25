/**
* Les Petits Plats JS : Add Tags Filters
**/
import { recipes } from '../../datas/recipes.js';
import { createTag } from '../templates/tags.js';
import { searchListWithTags } from './search.js';

/* Tags Wrappers */
const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

/* Tags Already Added */
export const tagIngredientAlreadyAdded = [];
export const tagApplianceAlreadyAdded = [];
export const tagUstensilAlreadyAdded = [];

/* Add Tags Filter for Ingredients */ /* Ajout des Tags Ingredients */
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

            searchListWithTags(recipes);
            // return false;
        });
    });
}

/* Add Tag Filter for Appliances */ /* Ajout des Tags Appliances */
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

            searchListWithTags(recipes);
            // return false;
        });
    });
}

/* Add Tag Filter for Ustensils */ /* Ajout des Tags Ustensils */
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

            searchListWithTags(recipes);
            // return false;
        });
    });
}

/* Display Tags */ /* Affichage des Tags */
export const displayTags = recipes => { 
    // console.log(recipes);

    const filterItemIngredients = [...document.getElementsByClassName('filter__ingredients--items')];
    const filterItemAppliances = [...document.getElementsByClassName('filter__appliances--items')];
    const filterItemUstensils = [...document.getElementsByClassName('filter__ustensils--items')];

    /* Filter Items Ingredient */
    filterItemIngredients.forEach(element => {
        let text = element.innerText.trim().toLowerCase();

        element.addEventListener('click', (e) => {

            let tagsIngredient = document.getElementsByClassName('tag__ingredient');

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

                    searchListWithTags(recipes);
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

                searchListWithTags(recipes);
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

                    searchListWithTags(recipes);
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

                searchListWithTags(recipes);
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

                    searchListWithTags(recipes);
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

                searchListWithTags(recipes);
            }
        });
    });
}