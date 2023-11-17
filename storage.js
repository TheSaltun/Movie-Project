class Storage {

    static addMovieToStorage(newMovie){
        let movies = this.getMoviesFromStorage();
    
        movies.push(newMovie);
        localStorage.setItem("movies",JSON.stringify(movies));

    }
    static getMovieFromStorage(){
        let movies;
    
        if (localStorage.getItem("movies") === null) {
            movies = [];
        }
        else {
            movies = JSON.parse(localStorage.getItem("movies"));
    
        }
    
        return movies;
    }
    static deleteMoviesFromStorage(movieTitle){
        let movies = this.getMoviesFromStorage();
      
        movies.forEach(function(movie,index){
            if(movie.title === movieTitle) {
                movies.splice(index,1);
            }
        });
    
        localStorage.setItem("movies",JSON.stringify(movies));
    
    
    
    
    }
    static clearAllMoviesFromStorage(){
    
        localStorage.removeItem("movies");
        
    }

}
