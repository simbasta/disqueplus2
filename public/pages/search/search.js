document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchbar');
  const movies = document.getElementsByClassName('movies');

  const filterMovies = () => {
    const input = searchInput.value.toLowerCase();
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      const text = movie.innerHTML.toLowerCase();
      movie.classList.toggle('hidden', !text.includes(input));
    }
  };

  searchInput.addEventListener('keyup', filterMovies);
});

