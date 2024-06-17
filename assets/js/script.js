//DEPENDENCIES
    const Randombutton = $('#randomize')
    const ingredientFormEl = $('#ingredientForm')
    const ingredientInput =$('#ingredient-input')
    const searchButton = $('#search')
    
    const RecipeURL= './results.html'
    let mode ='' 
    function redirectPageRandom(event){
        event.preventDefault();
        console.log("Did I work?")
        localStorage.setItem('mode', 'random')
     
        $(location).attr('href', RecipeURL)
     
        getRandommeal()
    }
    function redirectPageIngridient(event) {
        event.preventDefault();
        console.log(ingredientInput.val())
        localStorage.setItem('mode', 'ingredient')
        localStorage.setItem('ingredientInput', ingredientInput.val())

        $(location).attr('href', RecipeURL)

        ingredientFunc();
        displayRecipes();
        getIngredientsList();
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



// USER INTERACTIONS









