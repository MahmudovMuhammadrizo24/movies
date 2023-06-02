/*const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(data); // Ma'lumotni konsolga chiqaring
    res.send('Ma\'lumot qabul qilindi');
});

app.listen(3000, () => {
    console.log('Server ishga tushdi');
});*/

let movieCount = 0;
const table = document.querySelector < HTMLTableElement > ('.col .table');
const movieCountText = document.querySelector < HTMLSpanElement > ('.col .movie-count');
const movieContainer = document.querySelector < HTMLDivElement > ('.container');
const movieLoader = document.querySelector('.loader');
movieCountText!.textContent = movieCount.toString();
const moviesSearch = document.querySelector < HTMLInputElement > ('.form-control');
const moviesGenresAll = document.querySelectorAll < HTMLLIElement > ('.list-group-item');
const sortClick = document.querySelectorAll < HTMLIFrameElement > ('.sort-click');
const sortIcons = document.querySelectorAll < HTMLIFrameElement > ('.sort-icon');
const moviePagination = document.querySelector < HTMLUListElement > ('.pagination');
const moviesPerPage = 4;
let currentPage = 1;
let selectedGenres: string[] = [];
let moviesData: Array<{
    title: string;
    genre: {
        name: string;
    };
    numberInStock: number;
    dailyRentalRate: number;
}> = [];

sortIcons.forEach(icon => {
    icon.classList.add('d-none');
});

sortClick.forEach((sort, index) => {
    sort.addEventListener('click', () => {
        sortIcons.forEach((icon, iconIndex) => {
            if (index === iconIndex) {
                icon.classList.toggle('fa-sort-up');
                icon.classList.toggle('fa-sort-down');
            } else {
                icon.classList.add('d-none');
                icon.classList.remove('fa-sort-up');
                icon.classList.remove('fa-sort-down');
            }
        });
    });
});

movieContainer?.classList.add('container-loading');
movieLoader?.classList.remove('container-loading');

fetch('https://pdp-movies-78.onrender.com/api/movies')
    .then(response => response.json())
    .then(movies => {
        movieCount = movies.length;
        movieCountText!.textContent = movieCount.toString();
        moviesData = movies;
        renderMovies();
        updatePagination();
        console.log(movies);
        movieContainer?.classList.remove('container-loading');
        movieLoader?.classList.add('container-loading');
    })
    .catch(error => {
        console.log('Xatolik yuz berdi:', error);
    });

function renderMovies() {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToRender = getFilteredMovies().slice(startIndex, endIndex);

    while (table!.rows.length > 1) {
        table!.deleteRow(1);
    }

    moviesToRender.forEach(movie => {
        createTable(movie);
    });
}

function createTable(movie) {
    const row = document.createElement('tr');

    const movieName = document.createElement('td');
    const tdAnchor = document.createElement('a');
    tdAnchor.href = '';
    tdAnchor.className = 'movie-name'
    tdAnchor.textContent = movie.title;
    movieName.appendChild(tdAnchor);
    row.appendChild(movieName);

    const movieGenre = document.createElement('td');
    movieGenre.textContent = movie.genre.name;
    movieGenre.className = 'movie-genre'
    row.appendChild(movieGenre);

    const movieNumberInStock = document.createElement('td');
    movieNumberInStock.textContent = movie.numberInStock;
    row.appendChild(movieNumberInStock);

    const movieDailyRentalRate = document.createElement('td');
    movieDailyRentalRate.textContent = movie.dailyRentalRate;
    row.appendChild(movieDailyRentalRate);

    const movieFavoriteHeart = document.createElement('td');
    const movieHeartIcon = document.createElement('i');
    movieHeartIcon.className = 'icon-heart fa-regular fa-heart';
    movieFavoriteHeart.appendChild(movieHeartIcon);
    row.appendChild(movieFavoriteHeart);

    let isLiked = false;

    movieHeartIcon.addEventListener('click', () => {
        if (isLiked) {
            movieHeartIcon.classList.replace('fa-solid', 'fa-regular');
            isLiked = false;
        } else {
            movieHeartIcon.classList.replace('fa-regular', 'fa-solid');
            isLiked = true;
        }
    });

    table!.appendChild(row);
}

moviesSearch?.addEventListener('input', () => {
    handleSearch();
});




moviesGenresAll.forEach(genre => {
    genre.addEventListener('click', () => {
        moviesGenresAll.forEach(g => {
            g.classList.remove('active');
        });
        genre.classList.add('active');
        handleGenreSelection();
    });
});



function handleGenreSelection() {
    selectedGenres = [];
    moviesGenresAll.forEach(genre => {
        if (genre.classList.contains('active')) {
            selectedGenres.push(genre.textContent || '');
        }
    });

    if (selectedGenres.includes('All Genres')) {
        selectedGenres = [];
    }

    renderMovies();
    updatePagination();
}


function getFilteredMovies() {
    const searchQuery = moviesSearch!.value.toLowerCase();

    return moviesData.filter(movie => {
        const title = movie.title.toLowerCase();
        const genre = movie.genre.name.toLowerCase();

        const isTitleMatch = title.includes(searchQuery);
        const isGenreMatch =
            selectedGenres.length === 0 || selectedGenres.some(selectedGenre => genre.includes(selectedGenre.toLowerCase()));

        return isTitleMatch && isGenreMatch;
    });
}



function handleSearch() {
    renderMovies();
    if (moviesSearch!.value === '') {
        currentPage = 1;
        updatePagination();
    } else {
        currentPage = 1;
        renderMovies();
        updatePagination();
    }
}

function updatePagination() {
    const filteredMoviesCount = getFilteredMovies().length;
    const totalPages = Math.ceil(filteredMoviesCount / moviesPerPage);

    currentPage = Math.min(currentPage, totalPages);

    while (moviePagination!.firstChild) {
        moviePagination!.removeChild(moviePagination!.firstChild);
    }

    const allGenresActive = selectedGenres.length === 0;

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.textContent = i.toString();
        pageLink.href = '#';
        // if (i === currentPage || (i === 1 && allGenresActive)) {
        //   pageItem.classList.add('active');
        // }
        pageItem.appendChild(pageLink);
        moviePagination!.appendChild(pageItem);
    }

    const pageLinks = moviePagination!.querySelectorAll('.page-link');
    pageLinks.forEach(pageLink => {
        pageLink.addEventListener('click', () => {
            currentPage = parseInt(pageLink.textContent!);
            renderMovies();
            handleSearch();
        });
    });
} 