/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// let filtersBtn = document.querySelectorAll('.dropbtn'); 

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
  // function filterFunction() {
  //   let input, filter, ul, li, a, i;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   div = document.getElementById("myDropdown");
  //   a = div.getElementsByTagName("a");

  //   for (i = 0; i < a.length; i++) {
  //     txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // }

// let dropInput = document.querySelectorAll(".dropInput");

// function filterFunction() {
//           let ul, li, i;
//           let input = document.querySelector(".dropInput");
//           let filter = input.value.toUpperCase();
//           let div = document.querySelector(".dropdown-content");
//           let a = div.querySelector("a");

//           for (i = 0; i < a.length; i++) {
//             txtValue = a[i].textContent || a[i].innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//               a[i].style.display = "";
//             } else {
//               a[i].style.display = "none";
//             }
//           }
// }

// dropInput.forEach((btn) => btn.addEventListener("keyup", filterFunction));
// filtersBtn.forEach((btn) => btn.addEventListener("click", myFunction));

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