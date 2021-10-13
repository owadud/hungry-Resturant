

 function loadData() {
    
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

        .then(res => res.json())
        
        .then(data => {


            displayMeal(data);
        })
        
}
loadData();



function displayMeal(mealCategories) {

    const mealItems = document.getElementById('mealItems');

    for (let i = 0; i < 20; i++) {
        const category = mealCategories.categories[i];

        const categoryDiv = document.createElement('div');
        categoryDiv.className= 'food';
        const mealInfo = `<img src=${category.strCategoryThumb}>
        <h3> ${category.strCategory} </h3>`;
        categoryDiv.innerHTML = mealInfo;
        mealItems.appendChild(categoryDiv);
        
    }

}




