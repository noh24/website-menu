//select menu 
const menu = document.getElementById("menu");
//make an array with menu items
Array.from(document.getElementsByClassName("menu-items"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });