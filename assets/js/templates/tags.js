/**
* Les Petits Plats JS : Tag Template
**/
/* Create Tag */
export const createTag = tag => {
    let itemTag = document.createElement('div');
    itemTag.classList.add('tag');
    itemTag.innerHTML = `
        <h2>`+tag+`</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="deleteIcon" width="14" height="14" viewBox="0 0 14 13" fill="none">
            <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    
    return itemTag;
}