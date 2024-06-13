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
    const ingredientInput =$('#ingredient-input')
    const searchButton = $('#search')
    
    const RecipeURL= './recipe.html'
    let mode ='' 
    function redirectPageRandom(event){
        event.preventDefault();
        console.log("Did I work?")
        localStorage.setItem('random',mode)
     // window.location.replace(RecipeURL)
        $(location).attr('href', RecipeURL)
        // document.location.replace(RecipeURL);
        getRandommeal()
    }
    function redirectPageIngridient(event) {
        event.preventDefault();
        console.log(ingredientInput.val())
        localStorage.setItem('input', mode)
        localStorage.setItem('ingredientInput', ingredientInput.val())

        $(location).attr('href', RecipeURL)

        ingredientFunc();
        displayRecipes();
        getIngredientsList();
    }

  })

}
function redirectHome() {
    const homeurl = './index.html';
    window.location.replace(homeurl)
}



Randombutton.on('click', redirectPageRandom)
ingredientFormEl.on('submit', redirectPageIngridient)

// function to launch the jokes modal
function launchJokesModal (event){

    event.preventDefault();
    console.log("launch jokes modal");

    getJokes()
        .then(jokesArray => {
            const jokesCardArray = createJokeCard(jokesArray);
            renderJokeCard(jokesCardArray);   
        });
}

// function to create joke card
function createJokeCard (jokesArray) {

    let jokesCardArray = [];

    for (i = 0; i < jokesArray.length; i++) {

        console.log("create Joke Card");
        
        const jokeCard = $('<div>')
            .addClass("card");
        
        const jokeContent = $('<div>') 
            .addClass('card-body')
            .text(jokesArray[i]);

        jokeCard.append(jokeContent);

        jokesCardArray.push(jokeCard);
    }
    return jokesCardArray;
    
}

// function to render joke card
function renderJokeCard (jokesCardArray) {
    const jokesCardContainer = $('#jokesModalBody');

    for (i = 0; i < jokesCardArray.length; i++) {
        jokesCardContainer.append(jokesCardArray[i]);
    }
}

function getJokes () {
    const requestJokesUrl = 'https://icanhazdadjoke.com/';
    //set a maximum number of jokes to pull and display
    const maxJokes = 5;

    const jokesArray = [];

    console.log("get jokes");

    const fetchPromises = [];

    for (i = 0; i < maxJokes; i++) {

        fetchPromises.push(
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
        )
    }
    return Promise.all(fetchPromises)
        .then(() => {
            console.log ("jokesArray", jokesArray)
            return jokesArray;
        });
    
}

// USER INTERACTIONS





// event listener for modal launch button
$('#jokesButton').on('click', launchJokesModal);



