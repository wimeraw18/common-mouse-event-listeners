// VARIABLES
const click = document.querySelector(".click");
const mouseover = document.querySelector(".mouseover");
const mouseenter = document.querySelector(".mouseenter");
const dblclick = document.querySelector(".dblclick");
const select = document.querySelector(".select");
const mousemove = document.querySelector(".mousemove");
const contextmenu = document.querySelector(".contextmenu");
const mouseleave = document.querySelector(".mouseleave");
const wheel = document.querySelector(".wheel");
const clickCode = document.querySelector("#click-code");
const mouseoverCode = document.querySelector("#mouseover-code");
const dblclickCode = document.querySelector("#dblclick-code");
const contextmenuCode = document.querySelector("#contextmenu-code");
const mouseleaveCode = document.querySelector("#mouseleave-code");
const wheelCode = document.querySelector("#wheel-code");
const selectCode = document.querySelector("#select-code");
const reset = document.querySelector(".reset");

// FUNCTIONS
function resetPage() {
  const buttons = document.querySelectorAll("button");
  const codes = document.querySelectorAll("code");
  const textarea = document.querySelector("textarea");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
    codes[i].style.display = "none";
  }
  window.getSelection().removeAllRanges();
  textarea.className = "";
}

// EVENT LISTENERS
click.addEventListener("click", function() {
  clickCode.style.display = "block";
  click.className = "clicked";
});
dblclick.addEventListener("dblclick", function() {
  dblclickCode.style.display = "block";
  dblclick.className = "clicked";
});
contextmenu.addEventListener("contextmenu", function(e) {
  contextmenuCode.style.display = "block";
  e.preventDefault();
  contextmenu.className = "clicked";
});
mouseover.addEventListener("mouseover", function() {
  mouseoverCode.style.display = "block";
  mouseover.className = "clicked";
});
mouseleave.addEventListener("mouseleave", function() {
  mouseleaveCode.style.display = "block";
  mouseleave.className = "clicked";
});
wheel.addEventListener("wheel", function() {
  wheelCode.style.display = "block";
  wheel.className = "clicked";
});
select.addEventListener("select", function() {
  selectCode.style.display = "block";
  select.className = "clicked";
});
reset.addEventListener("click", resetPage);
