// DEPENDENCIES


// fetch('https://www.themealdb.com/api/json/v1/1/random.php') 
//     .then(function(response) {
//         return response.json(); 
//     })
//     .then(function(data){
//         console.log(data);
//     })
//       // testing fetch request  
    const Randombutton = $('#randomize')
    const Recipecontainer=$('#recipes')

// FUNCTIONS



function getRandommeal() {
    const requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
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
        RecipeUrl.setAttribute('href', date[i].strSource)
    
    }
    RecipeCard.appendChild(RecipeName);
    RecipeName.appendChild(RecipeCategory);
    RecipeCategory.appendChild(RecipeImg);
    RecipeImg.appendChild(Instructions);
    Instructions.appendChild(RecipeURL);
    Recipes.appendChild(RecipeCard);


    }

    })

}
function redirectHome() {
    const homeurl = './index.html';
    window.location.replace(homeurl)
}

header.getElementById("homeButton").addEventListener("click", redirectHome);
=======
};


getRandommeal();

// function to launch the jokes modal
function launchJokesModal (event){

    event.preventDefault();
    console.log("launch jokes modal");

    const jokeCard = createJokeCard();
    
    renderJokeCard(jokeCard);
}

// function to create joke card
function createJokeCard () {

    console.log("create Joke Card");
    
    const jokeCard = $('<div>')
        .addClass("card");
    
    const jokeContent = $('<div>') 
        .addClass('card-body')
        .text('A Joke!');

    jokeCard.append(jokeContent);

    return jokeCard;
}

// function to render joke card
function renderJokeCard (jokeCard) {
    const jokesCardContainer = $('#jokesModalBody');

    jokesCardContainer.append(jokeCard);
}

// USER INTERACTIONS

Randombutton.on('click', getRandommeal)



// event listener for modal launch button
$('#jokesButton').on('click', launchJokesModal);
