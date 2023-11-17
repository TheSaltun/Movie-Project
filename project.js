const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-movies");




eventListeners();

function eventListeners(){
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);

    });

    cardbody.addEventListener("click",deleteMovie);
    clear.addEventListener("click",clearAllMovies);

}
function addMovie(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        
        UI.displayMessages("Please fill all blank...","danger");

    }
    else {
       
        const newMovie = new Movie(title,director,url);

        UI.addMovieToUI(newMovie); 
        Storage.addMovieToStorage(newMovie); 

        UI.displayMessages("Added successfully","success");


    }


    UI.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteMovie(e){

    if (e.target.id === "delete-movie") {
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Deleted successfully","success");

    }

}
function clearAllMovies(){

    if (confirm("Movie will be deleted")) {
        UI.clearAllMoviesFromUI();
        Storage.clearAllMoviesFromStorage();

    }
   

}