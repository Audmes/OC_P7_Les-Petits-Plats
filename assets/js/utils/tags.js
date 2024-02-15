/**
* Les Petits Plats JS : Add Tags Filters
**/
import { createTag } from '../templates/tags.js';
// import { searchList } from '../utils/searchbar.js';

/* Tags Wrappers */
const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

/* Tags Already Added*/
const tagIngredientAlreadyAdded = [];
const tagApplianceAlreadyAdded = [];
const tagUstensilAlreadyAdded = [];

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

            const index = tagIngredientAlreadyAdded.indexOf(text);
            tagIngredientAlreadyAdded.splice(index, 1);
            // searchList();
            // return false;
        });
        // searchList();
    });
}

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

            const index = tagApplianceAlreadyAdded.indexOf(text);
            tagApplianceAlreadyAdded.splice(index, 1);
            // searchList();
            // return false;
        });
        // searchList();
    });
}

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

            const index = tagUstensilAlreadyAdded.indexOf(text);
            tagUstensilAlreadyAdded.splice(index, 1);
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

    // function deleteTag(tagsAlreadyAdded, tag) {
    //     console.log(tag);
    //     const deleteTag = [...document.getElementsByClassName('delete')];
    //     console.log(deleteTag);
    //     console.log(tagsAlreadyAdded);

    //     let deleteButton = deleteTag.filter((icon) => icon.className === 'delete');

    //     deleteButton.forEach((element) => element.addEventListener('click', (e) => {
    //         console.log(element);
    //         // Remove li class selected
    //         element.parentElement.classList.remove('selected');
    //         element.classList.add('hidden');
    //         tag.classList.add('hidden');

    //         const nameTag = tag.innerText.trim().toLowerCase();
    //         const index = tagsAlreadyAdded.indexOf(nameTag);
    //         tagsAlreadyAdded.splice(index, 1);

    //         return false;
    //     }));
    // }

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
                        }
                    }
            }else {

                target.classList.remove('selected');
                target.children[0].classList.add('hidden');

                for(let val of tagsIngredient) {
                    if(val.innerText.trim().toLowerCase() == text) {
                        tag = val;
                        tag.classList.add('hidden');
                    }
                }
                const nameTag = tag.innerText.trim().toLowerCase();

                const index = tagIngredientAlreadyAdded.indexOf(nameTag);
                tagIngredientAlreadyAdded.splice(index, 1);

            }
        });
    });

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
                        }
                    }
            }else {
                target.classList.remove('selected');
                target.children[0].classList.add('hidden');

                for(let val of tagsAppliance) {
                    if(val.innerText.trim().toLowerCase() == text) {
                        tag = val;
                        tag.classList.add('hidden');
                    }
                }
                const nameTag = tag.innerText.trim().toLowerCase();

                const index = tagApplianceAlreadyAdded.indexOf(nameTag);
                tagApplianceAlreadyAdded.splice(index, 1);
            }
        });
    });

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
                        }
                    }
            }else {
                target.classList.remove('selected');
                target.children[0].classList.add('hidden');

                for(let val of tagsUstensil) {
                    if(val.innerText.trim().toLowerCase() == text) {
                        tag = val;
                        tag.classList.add('hidden');
                    }
                }
                const nameTag = tag.innerText.trim().toLowerCase();

                const index = tagUstensilAlreadyAdded.indexOf(nameTag);
                tagUstensilAlreadyAdded.splice(index, 1);
            }
        });
    });
}     
        // {
            
        //         const target = e.currentTarget;
        //         console.log(target);

        //         const text = e.target.innerText.toLowerCase();
        //         // console.log(text);

        //         const tags = document.querySelectorAll('.tag__ingredient');
        //         console.log(tags);

        //         test1 = null;

        //         itags.forEach((itages) => {
        //             if (itages.innerText == text) {
        //                 test1 = itages;
        //                 console.log(test1);
        //             }
        //         });

        //         console.log(test1);
                
                
                // .map( (itag) => itag.innerText).filter((tag) => tag.includes(text));
                // console.log(itags);


                // const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText).filter((tag) => tag.includes(text));
                // console.log(itags);


                // if(tagIngredientAlreadyAdded.includes(text) === false) {
                //     console.log('je suis ici');
                //     tagIngredientAlreadyAdded.push(text);

                //     target.classList.add('selected');

                //     const icon = createIcon();
                //     target.appendChild(icon);

                //     const test = document.querySelector('.tag__ingredient');
                    
                //     test.classList.remove('hidden');
                // }else {
                //     const test = document.querySelector('.tag__ingredient');
                //     target.classList.remove('selected');
                //     // icon.remove();
                //     test.classList.add('hidden');

                //     let index = tagIngredientAlreadyAdded.indexOf(text)
                //     tagIngredientAlreadyAdded.splice(index, 1);
                // }
            
                // const tag = itags.filter((tag) => tag.includes(text));
                // console.log(tag);
                

                
    
            //     if (tagIngredientAlreadyAdded.includes(element.innerText) === false && itags.includes(element.innerText) === false) {
    
            //         tagIngredientAlreadyAdded.push(element.innerText);
    
            //         element.classList.add('selected');
            //         const icon = createIcon();
            //         element.appendChild(icon);
    
            //         const nameTag = e.target.innerText;
    
            //         const itemTag = createTag(nameTag);
            //         itemTag.classList.add('tag__ingredient');
            //         tagIngredientWrapper.appendChild(itemTag);
    
            //         icon.addEventListener('click', () => {
            //             // Remove itemTag
            //             itemTag.remove();
    
            //             const tag = document.querySelectorAll('.tag__ingredient');
            //             // console.log(tag);
    
            //             // Remove Icon
            //             icon.remove();
            //             // Filter item remove selected
            //             element.classList.remove('selected');
                        
            //             // let indexTag = tagIngredientAlreadyAdded.indexOf(element.innerText);
            //             // tagIngredientAlreadyAdded.splice(indexTag, 1);
                        
            //             console.log(tagIngredientAlreadyAdded);
                                
            //         });
            //     }
//             });


// const filterItemAppliances = [...document.getElementsByClassName('filter__appliances--items')];

        // filterItemAppliances.forEach(element => {
        //     element.addEventListener('click', (e) => {

        //         if (tagApplianceAlreadyAdded.includes(element.innerText) === false) {

        //             tagApplianceAlreadyAdded.push(element.innerText);

        //             element.classList.add('selected');
        //             const icon = createIcon();
        //             element.appendChild(icon);

        //             const nameTag = e.target.innerText;

        //             const itemTag = createTag(nameTag);
        //             itemTag.classList.add('tag__appliance');
        //             tagApplianceWrapper.appendChild(itemTag);
        //         }
        //     });
        // });