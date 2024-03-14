/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// const filtersBtn = document.querySelectorAll('.dropbtn'); 
const dropInput = document.querySelectorAll(".dropInput");
const clearDropButton = document.querySelectorAll('.clearBtn__drop');
// const filterList = document.querySelectorAll('.drop__wrapper');

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
});

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};