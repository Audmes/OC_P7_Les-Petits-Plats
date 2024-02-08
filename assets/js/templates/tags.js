/**
* Les Petits Plats JS : Recipes Template
**/
export const displayTags = recipes => {
    // console.log(recipes);

    /* Filters Items */
    const filterItemIngredients = [...document.getElementsByClassName('filter__ingredients--items')];
    const filterItemAppliances = [...document.getElementsByClassName('filter__appliances--items')];
    const filterItemUstensils = [...document.getElementsByClassName('filter__ustensils--items')];

    /* Tags Wrappers */
    const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
    // const tagAppliance = document.querySelector('.tag__appliances--wrapper');
    // const tagUstensil = document.querySelector('.tag__ustensils--wrapper');

    let tagIngredientAlreadyAdded = [];
    let tagApplianceAlreadyAdded = [];
    let tagUstensilAlreadyAdded = [];
    
    const createItemSelected = item => {
        item.classList.add('selected');
        let span = document.createElement('span');
        span.classList.add('delete');
        span.innerHTML = `
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round"stroke-linejoin="round"/>
            </svg>
        `;
        item.appendChild(span);

        span.addEventListener('click', () => {

            const tag = [...document.querySelectorAll('.tag__ingredient')].find((tag) => tag.innerText === item.innerText);
            tag.remove();

            // Filter item remove selected
            item.classList.remove('selected');
            // Remove Icon
            span.remove();

            let indexTag = tagIngredientAlreadyAdded.indexOf(item.innerText);
            tagIngredientAlreadyAdded.splice(indexTag, 1);
            
            console.log(tagIngredientAlreadyAdded);
            
        });

    }
    /* Create Tags Ingredients */
    const createTagIngredient = tagIngredient => {
            let div = document.createElement('div');
            div.classList.add('tag__ingredient');
            div.classList.add('tag');
            div.innerHTML = `
                <h2>`+tagIngredient+`</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 13" fill="none">
                    <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            tagIngredientWrapper.appendChild(div);
    }

    Array.from(filterItemIngredients).forEach(element => {
        element.addEventListener('click', (e) => {
            let tagIngredient = e.target.innerText;
            
            const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText);
            console.log(itags.includes(tagIngredient));

            // if (tagIngredientAlreadyAdded.includes(tagIngredient) === false && itags.includes(tagIngredient.innerText) === false) {
            if (tagIngredientAlreadyAdded.includes(tagIngredient) === false && itags.includes(tagIngredient) === false) {
                createItemSelected(element);
                createTagIngredient(tagIngredient);
                tagIngredientAlreadyAdded.push(tagIngredient);
            }
            // console.log(tagIngredientAlreadyAdded);
        });
    });

    /* Create Tags Appliances */ 
    const createTagAppliance = appliance => {

        if (tagApplianceAlreadyAdded.includes(appliance) === false) {
            
            appliance.classList.add('selected');

            let span = document.createElement('span');
            span.classList.add('delete');
            span.innerHTML = `
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            let div = document.createElement('div');
            div.classList.add('tag__ingredient');
            div.classList.add('tag');
            div.innerHTML = `
                <h2>`+appliance.innerText+`</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 13" fill="none">
                    <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            appliance.appendChild(span);
            tagApplianceWrapper.appendChild(div);
            tagApplianceAlreadyAdded.push(appliance);
        }
    }

    filterItemAppliances.forEach(element => {
        element.addEventListener('click', () => {
            createTagAppliance(element);
        });
    });

    /* Create Tags Ustensils */ 
    const createTagUstensil = ustensil => {

        if (tagUstensilAlreadyAdded.includes(ustensil) === false) {
            
            ustensil.classList.add('selected');

            let span = document.createElement('span');
            span.classList.add('delete');
            span.innerHTML = `
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
                    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            let div = document.createElement('div');
            div.classList.add('tag__ingredient');
            div.classList.add('tag');
            div.innerHTML = `
                <h2>`+ustensil.innerText+`</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 13" fill="none">
                    <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            ustensil.appendChild(span);
            tagUstensilWrapper.appendChild(div);
            tagUstensilAlreadyAdded.push(ustensil);
        }
    }

    filterItemUstensils.forEach(element => {
        element.addEventListener('click', () => {
            createTagUstensil(element);
        });
    });

    // deleteTags.addEventListener('click', () => {
    //     tagIngredientContainer.remove();
    //     searchLive();
    //     return false;
    // });
}