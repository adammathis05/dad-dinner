fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast') 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data){
        console.log(data);
    })
        
    
