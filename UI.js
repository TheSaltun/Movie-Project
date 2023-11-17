class UI {

    static addMovieToUI(newMovie){
        /*
         <!-- <tr>
         <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
         <td></td>
         <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
       </tr> -->*/
     
       const movieList = document.getElementById("movies");
     
       movieList.innerHTML += `
       
             <tr>
                 <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
                 <td>${newMovie.title}</td>
                 <td>${newMovie.director}</td>
                 <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
             </tr>
       `;
     
     
     }
     static clearInputs(element1,element2,element3){
         element1.value = "";
         element2.value = "";
         element3.value = "";
     
     }
    static displayMessages(message,type){
         const cardBody = document.querySelector(".card-body");
         // Alert divini oluşturma
     
         const div = document.createElement("div");
     
     
         div.className = `alert alert-${type}`;
         div.textContent = message;
     
         cardBody.appendChild(div);
     
     
         setTimeout(function(){
             div.remove();
     
         },1000);
     
     
     
     }
     static loadAllMovies(movies){
     
         const movieList = document.getElementById("movies");
     
         Movie.forEach(function(movie){
             movieList.innerHTML += `<tr>
             <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
             <td>${movie.title}</td>
             <td>${movie.director}</td>
             <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
         </tr>`;
         });
     
     }
     static deleteMovieFromUI(element) {
     
         element.parentElement.parentElement.remove();
     }
     static clearAllMoviesFromUI(){
     
         const movieList = document.getElementById("movies");
     
     
     
         while(movieList.firstElementChild !== null) { // Child Olduğu Sürece
            movieList.firstElementChild.remove();
         }
     }
    
}
