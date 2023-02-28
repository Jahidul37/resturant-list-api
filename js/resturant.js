// <!-- 1st start part -->
const resturantMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => resturantData(data))
}

const resturantData = mealls => {

    const sectionContainer = document.getElementById("section-container")
    sectionContainer.innerText = '';
    // console.log(meals.meals[0].strMealThumb);

    mealls.meals.forEach(meal => {
        // console.log(meal);

        // <!-- 2nd start part -->

        const divCard = document.createElement('div')
        // divCard.classList.add('card-item')
        divCard.innerHTML = `
        <div class="col">
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strArea}</p>

                        <!-- 3rd start part call function -->
                        <!-- Button trigger modal -->
                        <button onclick = "Seemorebtn(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ShowModal">
                           See more
                        </button>
                    </div>
                </div>
                
            </div>

          
        `
        sectionContainer.appendChild(divCard)
    });
    // console.log(sectionContainer);

}

// <!-- 2nd start part call function -->
// 1st ...option..
const searchMeal = () => {
    const searchText = document.getElementById('input-field').value;
    // console.log(searchText);
    // const inputValue = inputField.Value;
    // inputField.innerText = inputValue
    // console.log(inputField);
    resturantMeal(searchText)

}

// 2nd....option...

// document.getElementById('search-btn').addEventListener('click', function () {
//     const inputField = document.getElementById('input-field')
//     const inputValue = inputField.Value;
//     inputField.innerText = inputValue
// })


// <!-- 3rd start part call function id another api -->
const Seemorebtn = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // // const showmodal = document.getElementById('ShowModal').innerText;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals[0]))


}



// <!-- 4th start part call function -->
const displayMeal = meal => {
    const showmodalLevel = document.getElementById('ShowModalLabel').innerText = meal.strMeal
    console.log(meal);

    const mealsDEtail = document.getElementById('mealsDEtails')
    mealsDEtail.innerHTML = `
    <img class= "img-fluid mb-1" src="${meal.strMealThumb}" alt="">
    <h4>${meal.strArea}</h4>
    `
}




resturantMeal('rice')


