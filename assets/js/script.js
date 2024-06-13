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

//header.getElementById("homeButton").addEventListener("click", redirectHome);
//=======
//};


getRandommeal();

// function to launch the jokes modal
function launchJokesModal (event){

    event.preventDefault();
    console.log("launch jokes modal");

    const jokesArray = getJokes();
    const jokesCardArray = createJokeCard(jokesArray);
    renderJokeCard(jokesCardArray);
}

// function to create joke card
function createJokeCard (jokesArray) {

    let jokesCardArray = [];

    for (i =0; i < jokesArray.length; i++) {

        console.log("create Joke Card");
        
        const jokeCard = $('<div>')
            .addClass("card");
        
        const jokeContent = $('<div>') 
            .addClass('card-body')
            .text(jokesArray.i);

        jokeCard.append(jokeContent);

        jokesCardArray.push(jokeCard);
    }
    return jokesCardArray;
    
}

// function to render joke card
function renderJokeCard (jokesCardArray) {
    const jokesCardContainer = $('#jokesModalBody');

    for (i = 0; i < jokesCardArray.length; index++) {
        jokesCardContainer.append(jokeCard);
    }

}

function getJokes () {
    const requestJokesUrl = 'https://icanhazdadjoke.com/';
    //set a maximum number of jokes to pull and display
    const maxJokes = 5;

    const jokesArray = [];

    console.log("get jokes");

    for (i = 0; i < maxJokes; i++) {

        fetch(requestJokesUrl, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            const joke = data.joke;
            
            jokesArray.push(joke);    

            //console.log("jokes 1", jokesArray);
        })
    }

    console.log ("jokesArray", jokesArray)
    return jokesArray;
}

// USER INTERACTIONS

Randombutton.on('click', getRandommeal)



// event listener for modal launch button
$('#jokesButton').on('click', launchJokesModal);
