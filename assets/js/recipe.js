const Recipecontainer=$('#recipes')

function getRandommeal() {
    const requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(requestURL)
    .then(function(response){
        return response.json();

    })
    then(function(data) {
        console.log(data.meals);
        
    
    for(let i =0; i<data.length;i++){
        RecipeCard = $('<div>')
        RecipeName = $('<h2>')
        RecipeCategory = $('<h3>')
        RecipeImg = $('<img>')
        // RecipeIngridients = $('<ul>')
        // Ingridient = $('<li>')
        Instructions = $('<p>')
        RecipeURL = $('<a>')
        
        RecipeName.textContent = data[i].strMeal
        RecipeCategory.textContent= data[i].strCategory
        RecipeImg.setAttribute('src', data[i].strMealThumb)
        Instructions.textContent= data[i].strInstructions
        if (!data[i].strSource) {
            RecipeURL = '' 
    } else {
        RecipeUrl.setAttribute('href', data[i].strSource)
    
    }
    RecipeCard.appendChild(RecipeName);
    RecipeName.appendChild(RecipeCategory);
    RecipeCategory.appendChild(RecipeImg);
    RecipeImg.appendChild(Instructions);
    Instructions.appendChild(RecipeURL);
    Recipecontainer.appendChild(RecipeCard);


    }

    })
}


getRandommeal();