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




