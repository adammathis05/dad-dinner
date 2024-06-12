// fetch('https://www.themealdb.com/api/json/v1/1/random.php') 
//     .then(function(response) {
//         return response.json(); 
//     })
//     .then(function(data){
//         console.log(data);
//     })
//       // testing fetch request  
    
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
        RecipeIngridients = $('<ul>')
        Ingridient = $('<li>')
        Instructions = $('<p>')
        RecipeURL = $('<a>')
    }

    })
};


getRandommeal();


// Randombutton.on('click', getRandommeal)

// function to launch the jokes modal
function launchJokesModal (){
    console.log("launch jokes modal")
}

// event listener for modal launch button
$('#jokesButton').on('click', launchJokesModal);
