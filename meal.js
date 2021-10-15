const search = document.getElementById('search-button');
const mealList = document.getElementById('mealItems');
const mealDetails = document.getElementById('mealDetails');
const notFound = document.getElementById("not-found");







search.addEventListener('click', () => {

    searchValue = document.getElementById('search-bar').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)

        .then((res) => res.json())

        .then(data => displayMeal(data.meals))


});



const displayMeal = (meals) => {
    //---Resetting the values---
    mealDetails.innerHTML = "";
    notFound.innerHTML = "";
    mealDetails.style.display = "none";
    //---If meals not found---
    if (meals == null) {
        return showNotFound();
    }

    meals.forEach(meal => {
        let mealDiv = document.createElement('div');
        mealDiv.className = 'food';
        mealDiv.innerHTML = `<img src=${meal.strMealThumb}
        > <h3>${meal.strMeal}</h3>`;

        mealList.appendChild(mealDiv);

        //Meal Details about item
        mealDiv.addEventListener('click', () => {
           

            mealDetails.innerHTML = `
        <img class="w-50 rounded" src=${meal.strMealThumb} alt=${meal.strMeal} class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <ul>
                <li>${meal.strIngredient1}</li>
                <li>${meal.strIngredient2}</li>
                <li>${meal.strIngredient3}</li>
                <li>${meal.strIngredient4}</li>
                <li>${meal.strIngredient5}</li>
                <li>${meal.strIngredient6}</li>
                <li>${meal.strIngredient7}</li>
            </ul>
        </div>
    </div>`;
            window.scroll(0,0);

        })
    })


}


const showNotFound = () => {
    notFound.innerHTML = `<h1 class="not-found">Items not found. Search again</h1>`;
}






