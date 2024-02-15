/**
* Les Petits Plats JS : Tag Template
**/
/* Create Tag */
export const createTag = tag => {
    let itemTag = document.createElement('div');
    itemTag.classList.add('tag');
    itemTag.innerHTML = `
        <h2>`+tag+`</h2>
    `;
    
    return itemTag;
}