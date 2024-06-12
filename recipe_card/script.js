document.addEventListener('DOMContentLoaded', () => {
    const ingredientInput = document.getElementById('ingredient');
    const filterButton = document.getElementById('filterButton');
    const randomButton = document.getElementById('randomButton');
    const recipeContainer = document.getElementById('recipeContainer');
    let displayedRecipes = new Set(); // Track displayed recipe IDs

    filterButton.addEventListener('click', () => {
        const ingredient = ingredientInput.value.trim();
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
    });

    randomButton.addEventListener('click', () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                if (!displayedRecipes.has(data.meals[0].idMeal)) {
                    displayedRecipes.add(data.meals[0].idMeal);
                    displayRecipes([data.meals[0]]);
                } else {
                    randomButton.click(); // Fetch a new random recipe if already displayed
                }
            })
            .catch(error => console.error('Error fetching random recipe:', error));
    });

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
                        <p>${ingredients}</p>
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
});
