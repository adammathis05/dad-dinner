// // DEPENDENCIES
// const returnHome = document.getElementById('goBack');




// // DATA






// // FUNCTIONS

// function homeRedirect() {
//     window.location.href="index.html";

// }




// // USER INTERACTIONS 

// returnHome.addEventListener('click', () => {
//     homeRedirect()

// });




// INITIALIZATION

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

// function to clear jokesCardContainer
function clearJokesCardContainer () {
    console.log("cleared");

    const jokesCardContainer = $('#jokesModalBody');
    jokesCardContainer.empty();
}

// USER INTERACTIONS

// event listener for modal launch button
$('#jokesButton').on('click', launchJokesModal);

// event listener for modal close button
$('#jokesClose').on('click', clearJokesCardContainer);

// Event listener for click outside the modal
$(document).on('click', function(event) {
    if (!$(event.target).closest('.modal').length && isModalOpen()) {
        clearJokesCardContainer();
        console.log("cleared on click");
    }
});

// Event listener for Escape key press
$(document).on('keydown', function(event) {
    if (event.key === 'Escape' && isModalOpen()) {
        clearJokesCardContainer();
        console.log("cleared on esc");
    }
});

// Function to check if the modal is open
function isModalOpen() {
    const modal = document.getElementById('jokesModal');
    console.log("modal open or close");
    console.log(modal.classList.contains('show'));

    return modal.classList.contains('show');
}

// // Example usage
// if (isModalOpen()) {
//     console.log('Modal is open');
// } else {
//     console.log('Modal is closed');
// }
