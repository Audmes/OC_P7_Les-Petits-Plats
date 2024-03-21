import './utils/filters.js';
import { recipes } from '../datas/recipes.js';
import { setList, searchList } from './utils/search.js';

const searchInput = document.querySelector("input[name='search']");
const errorMessage = document.getElementById("searchInput__message");
const searchButton = document.getElementById('search');
const clearButton = document.getElementById('clear');

// let recipes = [];

// async function getData() {
//     const response = await fetch ('../datas/recipes.json');
//     recipes = (await response.json()).recipes;
//     init();
// }

function init() {
    setList(recipes);
}
init();

// Clear Button / Clear All
clearButton.addEventListener("click", () => {
    // Function that removes any previous results from the page
    clearButton.classList.remove('show');
    clearButton.classList.add('hidden');
    searchInput.value = '';
    errorMessage.innerHTML = '';

    setList(recipes);
});

// Clear Input : Clear Button hidden / Show
searchInput.addEventListener("input", () => {
    if(!searchInput.value == '') {
        clearButton.classList.remove('hidden');
        clearButton.classList.add('show');
    }else {
        clearButton.classList.remove('show');
        clearButton.classList.add('hidden');
    }
});

function validate(input) {
    const regex = /^[^@&"()<>!_$*€£`+=\/;?#]+$/;
    const value = input.value.trim();

    if (!regex.test(value)) {
        errorMessage.innerHTML = input.validationMessage;
        // input.setCustomValidity("Vous ne pouvez pas utiliser de caractères spéciaux");
    } else {
        errorMessage.innerHTML = '';
        searchList(recipes);
    } 
}

// Search Button event "click"
searchButton.addEventListener("click", () => { 
    validate(searchInput); 
});

// Keyup
searchInput.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'Enter':
            validate(searchInput);
            break;
    }
});

/* Or if you prefer to use a research with Input event */
// Search Input event "keyup"
// let typingTimer;
// const typeInterval = 100;

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(searchList(recipes), typeInterval);
// });