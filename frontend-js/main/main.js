/*const genreListItems = document.querySelectorAll('.list-group-item');
const tableBody = document.querySelector('.table tbody');

genreListItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedGenre = item.textContent;
        fetch('https://pdp-movies-78.onrender.com/api/movies')
            .then(response => response.json())
            .then(movies => {
                const genreMovies = filterMoviesByGenre(movies, selectedGenre);
                displayGenreMovies(genreMovies);
            })
            .catch(error => {
                console.log('Xatolik yuz berdi:', error);
            });
    });
});

function filterMoviesByGenre(movies, genre) {
    if (genre === 'All Genres') {
        return movies;
    } else {
        return movies.filter(movie => movie.genre.name === genre);
    }
}

function displayGenreMovies(movies) {
    // Clear the previous genre movies from the table
    tableBody.innerHTML = '';

    // Display the genre movies in the table
    movies.forEach(movie => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = movie.title;
        row.appendChild(titleCell);

        const genreCell = document.createElement('td');
        genreCell.textContent = movie.genre.name;
        row.appendChild(genreCell);

        const numberInStockCell = document.createElement('td');
        numberInStockCell.textContent = movie.numberInStock.toString();
        row.appendChild(numberInStockCell);

        const dailyRentalRateCell = document.createElement('td');
        dailyRentalRateCell.textContent = movie.dailyRentalRate.toString();
        row.appendChild(dailyRentalRateCell);

        const favoriteCell = document.createElement('td');
        const heartIcon = document.createElement('i');
        heartIcon.className = 'icon-heart fa-regular fa-heart';
        favoriteCell.appendChild(heartIcon);
        row.appendChild(favoriteCell);

        tableBody.appendChild(row);
    });
}*/
const genreListItems = document.querySelectorAll('.list-group-item');
const tableBody = document.querySelector('.table tbody');
const container = document.querySelector(".container")
const p = document.createElement('p');


genreListItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedGenre = item.textContent;
        fetch('https://pdp-movies-78.onrender.com/api/movies')
            .then(response => response.json())
            .then(movies => {
                const genreMovies = [];
                for (let i = 0; i < movies.length; i++) {
                    if (selectedGenre === 'All Genres' || movies[i].genre.name === selectedGenre) {
                        genreMovies.push(movies[i]);
                    }
                }
                displayGenreMovies(genreMovies);
                p.textContent = genreMovies.length;
                container.appendChild(p);
            })
            .catch(error => {
                console.log('Xatolik yuz berdi:', error);
            });
    });
});


function displayGenreMovies(movies) {
    tableBody.innerHTML = '';

    movies.forEach(movie => {
        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${movie.title}</td>
      <td>${movie.genre.name}</td>
      <td>${movie.numberInStock}</td>
      <td>${movie.dailyRentalRate}</td>
      <td><i class="icon-heart fa-regular fa-heart"></i></td>
    `;

        tableBody.appendChild(row);
    });
}
