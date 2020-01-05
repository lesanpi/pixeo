$header = document.getElementById("header");
$menu = document.getElementById("menu");

//BUTTONS FOR CAROUSSEL
$right = document.getElementById("right");
$left = document.getElementById("left");
var classNameActive;
if (window.innerWidth <= 700) {
  $products = document.getElementsByClassName("products-sm");
  classNameActive = "active-sm";
} else if (window.innerWidth <= 1100) {
  $products = document.getElementsByClassName("products-md");
  classNameActive = "active-md";
} else {
  $products = document.getElementsByClassName("products");
  classNameActive = "active";
}
var activeProductGroup = 0;

function left() {
  $products[activeProductGroup].classList.remove(classNameActive);
  activeProductGroup--;
  if (activeProductGroup < 0)
    activeProductGroup = Array.from($products).length - 1;

  $products[activeProductGroup].classList.add(classNameActive);
}
function right() {
  $products[activeProductGroup].classList.remove(classNameActive);
  activeProductGroup++;
  if (activeProductGroup > Array.from($products).length - 1)
    activeProductGroup = 0;

  $products[activeProductGroup].classList.add(classNameActive);
}

//MAIN PRODUCT
$mainProName = document.getElementById("mainProductNAME");
$mainProImg = document.getElementById("mainProductIMG");

var fixed = false;
const newProducts = [
  {
    name: "Pixeo Prime I",
    src: "src/shoe_3.png"
  },
  {
    name: "Pixeo Cool",
    src: "src/shoe_2.jpg"
  },
  {
    name: "Pixeo Pro",
    src: "src/shoe_1.png"
  }
];

function blackMode() {
  if (window.innerWidth >= 700) {
    $header.style.background = "#1b1b1b";
    $menu.style.background = "#1b1b1b";
  }
}
function normalMode() {
  if (!fixed && window.innerWidth >= 700) {
    $header.style.background = "rgba(0,0,0,.1)";
    $menu.style.background = "rgba(0,0,0,.1)";
  }
}

var isNavDisplayed = false;

function displayNav() {
  if (isNavDisplayed) document.getElementById("list").style.display = "none";
  else document.getElementById("list").style.display = "block";
  isNavDisplayed = !isNavDisplayed;
}

window.onscroll = function() {
  if (window.scrollY > 70) {
    this.blackMode();
    $header.style.position = "fixed";
    $menu.style.position = "fixed";
    $header.style.top = "0";
    $menu.style.top = "60px";
    fixed = true;
  } else if (window.scrollY <= 70) {
    this.normalMode();
    fixed = false;
    $header.style.position = "relative";
    $menu.style.position = "relative";
    $menu.style.top = "0";
  }
};

var productNumberActive = 0;
const changeMainProduct = setInterval(function() {
  productNumberActive++;
  if (productNumberActive > 2) productNumberActive = 0;
  $mainProName.innerHTML = newProducts[productNumberActive].name;
  $mainProImg.src = newProducts[productNumberActive].src;
  $mainProImg.alt = newProducts[productNumberActive].name;
}, 2000);
