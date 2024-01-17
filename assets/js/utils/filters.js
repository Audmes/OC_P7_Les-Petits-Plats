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