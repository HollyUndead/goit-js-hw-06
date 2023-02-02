const categoryList = document.querySelectorAll('.item')
const categoryName = document.querySelectorAll('.item>h2')

console.log('Number of categories: ' + categoryList.length);

categoryName.forEach((el) => {
    console.log('Category: ' + el);
    
})