export const searchBar = recipes => {
    const searchInput = document.querySelector("input[name='search']");
    const searchButton = document.getElementById('search');
    const clearButton = document.getElementById('clear');
    const list = document.getElementById('list');

    // Clear List
    function clearList(){
        // looping through each child of the search results list and remove each child
        list.innerHTML = '';
        // while (list.firstChild){
        //     list.removeChild(list.firstChild)
        // }
    }

    // Clear Button / Clear All
    clearButton.addEventListener("click", () => {
        // 1. write a function that removes any previous results from the page
        // looping through each child of the search results list and remove each child
        clearButton.classList.remove('show');
        clearButton.classList.add('hidden');
        searchInput.value = '';
        clearList();
    });

    // Clear Input : Clear Button hidden / Show
    // tranformer en fonction
    searchInput.addEventListener("input", () => {
        if(!searchInput.value == '') {
            clearButton.classList.remove('hidden');
            clearButton.classList.add('show');
        }else {
            clearButton.classList.remove('show');
            clearButton.classList.add('hidden');
        }
    });

    // Search Button
    searchButton.addEventListener("click", () => {
        // inside, we will need to achieve a few things:
        // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
        let value = searchInput.value;
        // let value = e.target.value;
        // let value = e;

        // 2. check: if input exists and if input is larger than 0
        if (value && value.trim().length > 2){
            // 3. redefine 'value' to exclude white space and change input to all lowercase
            value = value.trim().toLowerCase();
            // 4. return the results only if the value of the search is included in the person's name
            //returning only the results of setList if the value of the search is included in the person's name
            setList(recipes.filter(recipe => {
                // let test = recipe.ingredients.forEach(({ ingredient }) => {
                //     recipe.ingredient.quantity.includes(value);
                // });
                // console.log(test);
                return recipe.name.includes(value)+recipe.description.includes(value);
            }));
            // we need to write code (a function for filtering through our data to include the search input value)
        } else {
            // 5. return nothing
            clearList();
            // input is invalid -- show an error message or show no results
        }
    });

    // No Results
    function noResults() {
        // create an element for the error; a list item ("li")
        const error = document.createElement('li');
        // adding a class name of "error-message" to our error element
        error.classList.add('error-message');

        // creating text for our element
        const text = document.createTextNode('No results found. Sorry!');
        // appending the text to our element
        error.appendChild(text);
        // appending the error to our list element
        list.appendChild(error);
    }

    // creating and declaring a function called "setList"
    // setList takes in a param of "results"
    function setList(results){
        clearList();

        for (const recipes of results){
            // creating a li element for each result item
            const resultItem = document.createElement('li');

            // adding a class to each item of the results
            resultItem.classList.add('result-item');

            // grabbing the name of the current point of the loop and adding the name as the list item's text
            const text = document.createTextNode(recipes.name);

            // appending the text to the result item
            resultItem.appendChild(text);

            // appending the result item to the list
            list.appendChild(resultItem);
        }
        if (results.length === 0 ){
            noResults();
        }
    }
}