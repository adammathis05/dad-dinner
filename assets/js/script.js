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
    const ingredientFormEl = $('#ingredientForm')
    const ingredientInput =$('#form-content')
    const searchButton = $('#search')
    
    const RecipeURL= './recipe.html'

    function redirectPageRandom(event){
        event.preventDefault();
        console.log("Did I work?")
        
        // window.location.replace(RecipeURL)
        $(location).attr('href', RecipeURL)
        // document.location.replace(RecipeURL);
        getRandommeal()
    }
    function redirectPageIngridient(event) {
        event.preventDefault();
        localStorage.setItem('ingredientInput.value', JSON.stringify(ingredientFormEl.value))

        $(location).attr('href', RecipeURL)

        ingredientFunc() 
    }


Randombutton.on('submit', redirectPageRandom)
ingredientFormEl.on('submit', redirectPageIngridient)

// function to launch the jokes modal
function launchJokesModal (event){

    event.preventDefault();
    console.log("launch jokes modal");

    const jokeCard = createJokeCard();
    
    renderJokeCard(jokeCard);
    getJokes();
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

function getJokes () {
    const requestJokesUrl = 'https://icanhazdadjoke.com/';
    console.log("get jokes");

    fetch(requestJokesUrl, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data.joke);
    })
}

// USER INTERACTIONS

Randombutton.on('click', getRandommeal)



// event listener for modal launch button
$('#jokesButton').on('click', launchJokesModal);



