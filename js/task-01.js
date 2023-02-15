const categoryList = document.querySelectorAll('.item')
const categoryName = document.querySelectorAll('.item>h2')

console.log('Number of categories: ' + categoryList.length);

console.log(categoryList[0].querySelectorAll('li').length);

categoryName.forEach((el, index) => {
    console.log('Category: ' + el.innerText);
    console.log('Elements: ' + categoryList[index].querySelectorAll('li').length);
})