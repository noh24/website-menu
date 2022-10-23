//select menu 
const menu = document.getElementById("menu");
//make an array with menu items
Array.from(document.getElementsByClassName("menu-items")).forEach(function(item, index) { //can do .forEach((param1, param2) => {code});
  item.onmouseover = function() { //can do = () => {}, () <- means no parameters => arrow function expression, {} used for multiple line arrow functions
    menu.dataset.activeIndex = index; //.dataset property allows custom data to be entered, activeIndex = custom attribute
  }
});