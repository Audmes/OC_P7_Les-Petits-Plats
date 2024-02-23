import { setList } from './search.js';

export const searchBar = recipes => {
    const searchInput = document.querySelector("input[name='search']");
    const searchButton = document.getElementById('search');
    const clearButton = document.getElementById('clear');

    // This function search and return recipes
    function searchList() {
        const value = searchInput.value;

        // Check: if input exists and if input is larger than 2
        if (value && value.trim().length > 2) {
            // Redefine 'value' to exclude white space and change input to all lowercase
            // value = value.trim().toLowerCase();
            const regex = new RegExp(`${value.trim().toLowerCase()}`);
            
            // Return the results only if the value of the search is included in the recipes name, description and ingredient list
            setList(recipes.filter(recipe => {
                let recipeIsMatching = false;

                const recipeName = recipe.name.trim().toLowerCase();

                if (regex.test(recipeName)) {
                    recipeIsMatching = true;
                } else if (regex.test(recipe.description)) {
                    recipeIsMatching = true;
                }

                // For Recipe Ingredients : listing all ingredients : "ingredient"
                recipe.ingredients.forEach(({ ingredient }) => {
                    const recipeIngredient = ingredient.trim().toLowerCase();

                    if (regex.test(recipeIngredient)) {
                      recipeIsMatching = true;
                    }
                });

                return recipeIsMatching; 

            }));
        }else {
            // input is invalid -- show an error message or show no results
            // Return nothing and display all Recipes
            setList(recipes);
        }
    }

    // Clear Button / Clear All
    clearButton.addEventListener("click", () => {
        // Function that removes any previous results from the page
        clearButton.classList.remove('show');
        clearButton.classList.add('hidden');
        searchInput.value = '';

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

    // Search Button event "click"
    searchButton.addEventListener("click", searchList);

    // Keyup
    searchInput.addEventListener('keyup', (e) => {
        switch(e.key) {
            case 'Enter':
                searchList();
                break;
        }
    });

    /* Or if you prefer to use a research with Input event */
    // Search Input event "keyup"
    // let typingTimer;
    // const typeInterval = 100;

    // searchInput.addEventListener('keyup', () => {
    //     clearTimeout(typingTimer);
    //     typingTimer = setTimeout(searchList(), typeInterval);
    // });
}

// console.log(searchBar);