/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const filtersBtn = document.querySelectorAll('.dropbtn'); 
const dropInput = document.querySelectorAll(".dropInput");

const clearDropButton = document.querySelectorAll('.clearBtn__drop');
const filterList = document.querySelectorAll('.drop__wrapper');

// This function clear recipes list
// function clearDropList() {
//   // Clear the list
//   list.innerHTML = '';
// }

// This function search and return recipes
// function searchDropList() {
//   let value = searchInput.value;

//   if (value && value.trim().length > 2) {
//       // Redefine 'value' to exclude white space and change input to all lowercase
//       value = value.trim().toLowerCase();
      
//       // Return the results only if the value of the search is included in the recipes name, description and ingredient list
//       setList(recipes.filter(recipe => {

//           // For Recipe Ingredients : listing all ingredients : "ingredient"
//           const ingredients = recipe.ingredients.map(function (recipe) {
//               return recipe["ingredient"]; 
//           });
//           // console.log(ingredients);

//           // Ingredients Tab with ingredient includes value
//           const ingredientsFiltres = ingredients.filter(ingredient => {
//               const ingredientsTab = ingredient.trim().toLowerCase();
              
//               return ingredientsTab.includes(value);
//           });
//           // console.log(ingredientsFiltres);

//           return recipe.name.includes(value)+recipe.description.includes(value)+ingredientsFiltres.includes(value);
//       }));
//   } else {
//       // input is invalid -- show an error message or show no results
//       // Return nothing and display all Recipes
//       clearList();
//       // Display all recipes
//       displayRecipes(recipes);
//       // Display total counts recipes
//       displayTotalRecipes(recipes);
//   }
// }

// This function display a message : not found !
// function noResults() {
//   // create an element for the error; a list item ("li")
//   const error = document.createElement('li');
//   // adding a class name of "error-message" to our error element
//   error.classList.add('error-message');

//   // creating text for our element
//   const text = document.createTextNode('No results found. Sorry!');
//   // appending the text to our element
//   error.appendChild(text);
//   // appending the error to our list element
//   list.appendChild(error);
// }

// setList takes in a param of "results"
// function setList(results){
//   // clear the list
//   clearList();
//   // Display recipes
//   displayRecipes(results);
//   // Display total counts recipes
//   displayTotalRecipes(results);

//   // If result is no recipe
//   if (results.length === 0 ){
//       noResults();
//   }
// }

function filterFunction(btn) {
  
    let input = btn.value;
    let btnParent = btn.parentElement;
    let clearButton = btnParent.parentElement.children[0].children[2];
    let filter = input.trim().toUpperCase();
    // let div = document.querySelector(".drop__wrapper");
    let div = btnParent.parentElement.children[1];
    let li = div.getElementsByTagName("li");

    if(!btn.value == '') {
      clearButton.classList.remove('hidden');
      clearButton.classList.add('show');
    }else {
        clearButton.classList.remove('show');
        clearButton.classList.add('hidden');
    }

    for (let i = 0; i < li.length; i++) {
      let txtValue = li[i].textContent || li[i].innerText;

      if (txtValue.trim().toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}
dropInput.forEach((btn) => btn.addEventListener('keyup', () => { filterFunction(btn); }));

function filterClear(btn) {
  btn.parentElement.children[0].value = '';
  filterFunction(btn);
}
clearDropButton.forEach((btn) => btn.addEventListener('click', () => { filterClear(btn); }));
// filtersBtn.forEach((btn) => btn.addEventListener("click", myFunction));


// Clear Button / Clear All
// clearButton.addEventListener("click", () => {
//   // Function that removes any previous results from the page
//   clearButton.classList.remove('show');
//   clearButton.classList.add('hidden');
//   searchInput.value = '';
//   // Clear all
//   clearList();
//   // Display all recipes
//   displayRecipes(recipes);
//   // Display total counts recipes
//   displayTotalRecipes(recipes);
// });

// Clear Input : Clear Button hidden / Show
// searchInput.addEventListener("input", () => {
//   if(!searchInput.value == '') {
//       clearButton.classList.remove('hidden');
//       clearButton.classList.add('show');
//   }else {
//       clearButton.classList.remove('show');
//       clearButton.classList.add('hidden');
//   }
// });

// Search Button event "click"
// searchButton.addEventListener("click", searchList);



// Multiple Dropdown Menu
let dropdown = document.querySelectorAll('.dropdown');
let dropdownArray = Array.prototype.slice.call(dropdown,0);

dropdownArray.forEach(function(el){
  let button = el.querySelector('.dropbtn'),
    menu = el.querySelector('.dropdown-content'),
      arrow = button.querySelector('.arrow-up');

  button.onclick = function(event) {
    // document.querySelector(".arrow-up").classList.toggle("rotate");

    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('rotate');
      arrow.classList.remove('rotate');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('rotate');
      arrow.classList.add('rotate');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};