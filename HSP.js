const contents = document.querySelector(".main_contents .items");
const logo = document.querySelector(".logo");

// contents.innerHTML
function loadItems() {
  return fetch("data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((item) => item.items);
}
function createHTMLString(item) {
  return `
  <li class="item" data-key=${item.type} data-value=${item.color}>
    <img src="${item.image}" alt="${item.type}" class =item_thumnail"/>
    <span class="item_description">${item.gender},${item.size}</span>
  </li>  
  `;
}

function displayItems(items) {
  const container = document.querySelector(".products");
  container.innerHTML = items.map((item) => createHTMLString(item)).join();
}

function onBtnClickimg(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  console.log(key);
  if (key == null || value == null) {
    return;
  }
  // uploadItemsI(key, value);
  displayItems(items.filter((item) => item[key] === value));
}
function onBtnClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  console.log(key);
  if (key == null || value == null) {
    return;
  }
  // uploadItemsC(key, value);

  displayItems(filtered);
}
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons_img = document.querySelector(".options");
  const buttons_color = document.querySelector(".options");
  logo.addEventListener("click", () => displayItems(items));
  buttons_img.addEventListener("click", (event) => onBtnClickimg(event, items));
  buttons_color.addEventListener("click", (event) => onBtnClick(event, items));
}

function uploadItemsC(key, value) {
  let item = document.querySelectorAll(".item");
  var itemArr = Array.prototype.slice.call(item);
  let filtered = itemArr.filter((item) => {
    // console.log(item.dataset.value);
    if (item.dataset.value !== value) {
      // item.classList.remove("item");
      // item.classList.add(".item");
    } else {
      // item.classList.remove(".invisible");
    }
  });
}
function uploadItemsI(key, value) {
  let item = document.querySelectorAll(".item");
  var itemArr = Array.prototype.slice.call(item);
  let filtered = itemArr.filter((item) => {
    // console.log(item.dataset.key);
    // console.log(value);
    if (item.dataset.key !== value) {
      item.classList.toggle("item");
      // item.classList.add(".invisible");
    } else {
      item.classList.toggle(".invisible");
      // item.classList.add(".item");
    }
  });
}

loadItems().then((items) => {
  displayItems(items);
  setEventListeners(items);
});
