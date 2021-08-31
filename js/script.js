//Load Data of all movies
const loadData = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=15509a2050a16c3488f45439258698b6"
  )
    .then((res) => res.json())
    .then((data) => displayMovies(data.results));
};
loadData();

// display movies
const displayMovies = (movies) => {
  // Spinner
  const Spinner = document.getElementById("loadpage-spinner");
  Spinner.style.display = "none";
  //   console.log(movies);
  const movieBox = document.getElementById("movie-box");

  movies.forEach((movie) => {
    console.log(movie);
    const movieDiv = document.createElement("div");
    const imgUrl = "https://image.tmdb.org/t/p/original/";
    movieDiv.innerHTML = `
    <div onclick="movieDetails('${movie.id}')" class="card">
          <img src="${
            imgUrl + movie.poster_path
          }" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3> ${movie.original_title}</h3>
            <p> ${movie.overview.slice(0, 150)}..... </p>
          </div>
        </div>
    `;
    movieBox.appendChild(movieDiv);
  });
};

//Load movia details data
const movieDetails = (movId) => {
  const url = `https://api.themoviedb.org/3/movie/${movId}?api_key=15509a2050a16c3488f45439258698b6`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMovieDetails(data));
};
//Display movie details

const displayMovieDetails = (movie) => {
  const movieDetailsBox = document.getElementById("movieDetails");
  movieDetailsBox.textContent = "";
  //   console.log(movie);
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const detailsDiv = document.createElement("div");
  detailsDiv.innerHTML = `
  <div class="card border border-3 border-primary">
          <img src="${
            imgUrl + movie.poster_path
          }" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h3> ${movie.original_title}</h3>
            <h3> IMDB Rating: ${movie.vote_average}</h3>
            <p> ${movie.overview} </p>
            <h4 class="text-secondary"> Release Date: ${movie.release_date}</h4>
          </div>
        </div>
  
  `;
  movieDetailsBox.appendChild(detailsDiv);
};
