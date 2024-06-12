fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast') 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data){
        console.log(data);
    })
      // testing fetch request  
    
function getRandommeal() {
    const requestURL = 'www.themealdb.com/api/json/v1/1/random.php'
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);

    })

}



Randombutton.on('click', getRandommeal)
