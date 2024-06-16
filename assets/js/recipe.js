const Recipecontainer= $('#recipes-container')
if(localStorage.getItem('mode')=== 'random') {
getRandommeal();
}
else {
    ingredientFunc();
}

function getRandommeal() {
    const requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(requestURL)
    .then(function(response){
        return response.json();

    })
    .then(function(data) {
        console.log(data.meals);
        
    
    for(let i =0; i<data.meals.length;i++){
        RecipeCard = $('<div>')
        RecipeName = $('<h2>')
        RecipeCategory = $('<h3>')
        RecipeImg = $('<img>')
        // RecipeIngridients = $('<ul>')
        // Ingridient = $('<li>')
        Instructions = $('<p>')
        // RecipeURL = $('<a>')
        
        RecipeName.text(data.meals[i].strMeal)
        RecipeName.attr('style', 'border: 3px solid #3C1518')
        RecipeName.attr('style','box-shadow: 0 1px 6px #3C1518, -5px 5px 9px rgba(0, 0, 0, 0.24);')
        // RecipeName.attr('style', 'padding: 3px;')
        RecipeCategory.text(data.meals[i].strCategory)
        RecipeImg.attr('src', data.meals[i].strMealThumb)
        RecipeImg.attr('style','width:350px')
        Instructions.text(data.meals[i].strInstructions)
        Instructions.attr('style', 'text-align:center; font-size:15px;')
    //     if (!data[i].strSource) {
    //         RecipeURL = '' 
    // } else {
    //     RecipeUrl.setAttribute('href', data[i].strSource)
    
    // }
    RecipeCard.append(RecipeName);
    RecipeName.append(RecipeCategory);
    RecipeCategory.append(Instructions);
    RecipeCategory.append(RecipeImg);
    // RecipeImg.append(Instructions);
    // Instructions.appendChild(RecipeURL);
    Recipecontainer.append(RecipeCard);


    }

    })
}








    const recipeContainer = document.getElementById('recipes');
    let displayedRecipes = new Set(); // Track displayed recipe IDs

    function ingredientFunc(){
        

        const ingredient =   localStorage.getItem('ingredientInput')
        // ingredientInput.value.trim();
        if (ingredient) {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                .then(response => response.json())
                .then(data => {
                    const newMeals = data.meals.filter(meal => !displayedRecipes.has(meal.idMeal));
                    const mealPromises = newMeals.slice(0, 5).map(meal => {
                        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                            .then(response => response.json())
                            .then(mealData => mealData.meals[0]);
                    });
                    Promise.all(mealPromises).then(meals => {
                        
                        meals.forEach(meal => displayedRecipes.add(meal.idMeal)); // Add new recipes to the set
                        displayRecipes(meals);
                    });
                })
                .catch(error => console.error('Error fetching recipes:', error));
        } else {
            alert('Please enter an ingredient to search for recipes.');
        }
    }
   


    function displayRecipes(meals) {
        if (meals.length === 0) {
            recipeContainer.innerHTML = '<p>No new recipes found. Try a different ingredient.</p>';
            return;
        }
        recipeContainer.innerHTML = ''; // Clear existing recipes
        if (meals) {
            meals.forEach(meal => {
                const ingredients = getIngredientsList(meal);
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card';
                recipeCard.innerHTML = `
                    <a href="https://www.themealdb.com/meal.php?c=${meal.idMeal}" target="_blank">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    </a>
                    <div class="recipe-content">
                        <h2>${meal.strMeal}</h2>
                        <p id="ingredients">${ingredients}</p>
                    </div>
                `;
                recipeContainer.appendChild(recipeCard);
            });
        } else {
            recipeContainer.innerHTML = '<p>No recipes found. Try a different ingredient.</p>';
        }
    }

    function getIngredientsList(meal) {
        let ingredients = '';
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient) {
                ingredients += `${ingredient} - ${measure}<br>`;
            }
        }
        return ingredients;
    }



const homepageURL = "/index.html"
const homeButton = $('#goBack')

function redirectHome() {
  const homeurl = './index.html';
   window.location.replace(homeurl)}

homeButton.on('click', redirectHome)


