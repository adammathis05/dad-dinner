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


function redirectHome() {
    const homeurl = './index.html';
    window.location.replace(homeurl)
}



Randombutton.on('click', redirectPageRandom)
ingredientFormEl.on('submit', redirectPageIngridient)




