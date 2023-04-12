const categoriesList = document.querySelector("#categories");
const categoriesCount = categoriesList.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesCount}`);
const categoryItems = categoriesList.querySelectorAll(".item");
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElementsCount = categoryItem.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
