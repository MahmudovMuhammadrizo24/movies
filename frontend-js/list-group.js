"use strict";



/*
const list_group_item = document.querySelectorAll(".list-group-item");
const bigBox = document.querySelector(".bigBox");
const form_control = document.querySelector(".form-control");
const moviNum = document.querySelector(".moviNum");
const containerDiv = document.querySelector(".film");
const tbody = document.createElement("tbody");

let selectedGenre = 'All Genres';
let currentPage = 1;
const moviesPerPage = 4;
let searchQuery = '';

function filterMoviesByGenre(data) {
    const genreMovies = data.filter((movie) => {
        if (selectedGenre === 'All Genres') {
            return true;
        }
        return movie.genre.name === selectedGenre;
    });
    return genreMovies;
}

function filterMoviesBySearch(data) {
    if (searchQuery.trim() === '') {
        return data;
    }

    const searchedMovies = data.filter((movie) => {
        const movieTitle = movie.title.toLowerCase();
        return movieTitle.includes(searchQuery.toLowerCase());
    });
    return searchedMovies;
}

function displayMovies(data) {
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToShow = data.slice(startIndex, endIndex);

    moviesToShow.forEach((movie) => {
        const movieRow = document.createElement("tr");

        const titleCell = document.createElement("td");
        const titleLink = document.createElement("a");
        titleLink.href = `/movies/${movie.id}`;
        titleLink.textContent = movie.title;
        titleCell.appendChild(titleLink);
        movieRow.appendChild(titleCell);

        const genreCell = document.createElement("td");
        genreCell.textContent = movie.genre.name;
        movieRow.appendChild(genreCell);

        const stockCell = document.createElement("td");
        stockCell.textContent = movie.numberInStock;
        movieRow.appendChild(stockCell);

        const rateCell = document.createElement("td");
        rateCell.textContent = movie.dailyRentalRate;
        movieRow.appendChild(rateCell);

        const emptyCell = document.createElement("td");
        const iconElement = document.createElement("i");
        iconElement.className = "fa-regular fa-heart";
        iconElement.style.color = "#04070d";

        // Add event listener to toggle the icon
        iconElement.addEventListener("click", function () {
            if (iconElement.className.includes("fa-regular")) {
                iconElement.className = "fa-solid fa-heart";
            } else {
                iconElement.className = "fa-regular fa-heart";
            }
        });
        emptyCell.appendChild(iconElement);
        movieRow.appendChild(emptyCell);

        tbody.appendChild(movieRow);
    });

    moviNum.textContent = moviesToShow.length;
}

function updatePagination(data) {
    const totalPages = Math.ceil(data.length / moviesPerPage);

    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.className = "page-item";

        const a = document.createElement("a");
        a.className = "page-link";
        a.textContent = i;

        // Sayfalama linkine tıklanma olayını ekleme
        a.addEventListener("click", function () {
            currentPage = i;
            displayMovies(data);
            updatePagination(data);
        });

        li.appendChild(a);
        paginationContainer.appendChild(li);
    }
}

fetch("https://pdp-movies-78.onrender.com/api/movies")
    .then((response) => response.json())
    .then((data) => {
        const genreMovies = filterMoviesByGenre(data);
        const searchedMovies = filterMoviesBySearch(genreMovies);
        displayMovies(searchedMovies);
        updatePagination(searchedMovies);
    })
    .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
    });

for (let listGroup of list_group_item) {
    listGroup.addEventListener("click", () => {
        for (let otherListGroup of list_group_item) {
            if (otherListGroup !== listGroup) {
                otherListGroup.classList.remove("active");
            }
        }
        listGroup.classList.add("active");

        selectedGenre = listGroup.textContent;
        fetch("https://pdp-movies-78.onrender.com/api/movies")
            .then((response) => response.json())
            .then((data) => {
                const genreMovies = filterMoviesByGenre(data);
                const searchedMovies = filterMoviesBySearch(genreMovies);
                displayMovies(searchedMovies);
                updatePagination(searchedMovies);
            })
            .catch((error) => {
                console.error("Xatolik yuz berdi:", error);
            });
    });
}

form_control.addEventListener("input", () => {
    searchQuery = form_control.value.trim();
    fetch("https://pdp-movies-78.onrender.com/api/movies")
        .then((response) => response.json())
        .then((data) => {
            const genreMovies = filterMoviesByGenre(data);
            const searchedMovies = filterMoviesBySearch(genreMovies);
            displayMovies(searchedMovies);
            updatePagination(searchedMovies);
        })
        .catch((error) => {
            console.error("Xatolik yuz berdi:", error);
        });
});

const table = document.createElement("table");
table.className = "table";

const thead = document.createElement("thead");
const tr = document.createElement("tr");

const th1 = document.createElement("th");
th1.className = "clickable";
th1.textContent = "Title";
tr.appendChild(th1);

const th2 = document.createElement("th");
th2.className = "clickable";
th2.textContent = "Genre";
tr.appendChild(th2);

const th3 = document.createElement("th");
th3.className = "clickable";
th3.textContent = "Stock";
tr.appendChild(th3);

const th4 = document.createElement("th");
th4.className = "clickable";
th4.textContent = "Rate";
const iTag = document.createElement("i");
iTag.className = "fa fa-sort-desc";
th4.appendChild(iTag);
tr.appendChild(th4);

const th5 = document.createElement("th");
th5.className = "clickable";
th5.textContent = "like";
tr.appendChild(th5);

thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);

const colDiv = document.createElement("div");
colDiv.className = "col";
colDiv.appendChild(table);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.className = "pagination";

nav.appendChild(ul);
colDiv.appendChild(nav);

containerDiv.appendChild(colDiv);
*/
/*
const list_group_item = document.querySelectorAll(".list-group-item");
const bigBox = document.querySelector(".bigBox");
const form_control = document.querySelector(".form-control");
const moviNum = document.querySelector(".moviNum");
const containerDiv = document.querySelector(".film");
const tbody = document.createElement("tbody");

let selectedGenre = 'All Genres';
let currentPage = 1;
const moviesPerPage = 4;
let searchQuery = '';

function filterMoviesByGenre(data) {
    const genreMovies = data.filter((movie) => {
        if (selectedGenre === 'All Genres') {
            return true;
        }
        return movie.genre.name === selectedGenre;
    });
    return genreMovies;
}

function filterMoviesBySearch(data) {
    if (searchQuery.trim() === '') {
        return data;
    }

    const searchedMovies = data.filter((movie) => {
        const movieTitle = movie.title.toLowerCase();
        return movieTitle.includes(searchQuery.toLowerCase());
    });
    return searchedMovies;
}

function displayMovies(data) {
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToShow = data.slice(startIndex, endIndex);

    moviesToShow.forEach((movie) => {
        const movieRow = document.createElement("tr");

        const titleCell = document.createElement("td");
        const titleLink = document.createElement("a");
        titleLink.href = `/movies/${movie.id}`;
        titleLink.textContent = movie.title;
        titleLink.style.textDecoration = "none"
        titleCell.appendChild(titleLink);
        movieRow.appendChild(titleCell);

        const genreCell = document.createElement("td");
        genreCell.textContent = movie.genre.name;
        movieRow.appendChild(genreCell);

        const stockCell = document.createElement("td");
        stockCell.textContent = movie.numberInStock;
        movieRow.appendChild(stockCell);

        const rateCell = document.createElement("td");
        rateCell.textContent = movie.dailyRentalRate;
        movieRow.appendChild(rateCell);

        const emptyCell = document.createElement("td");
        const iconElement = document.createElement("i");
        iconElement.className = "fa-regular fa-heart";
        iconElement.style.color = "#04070d";

        // Add event listener to toggle the icon
        iconElement.addEventListener("click", function () {
            if (iconElement.className.includes("fa-regular")) {
                iconElement.className = "fa-solid fa-heart";
            } else {
                iconElement.className = "fa-regular fa-heart";
            }
        });
        emptyCell.appendChild(iconElement);
        movieRow.appendChild(emptyCell);

        tbody.appendChild(movieRow);
    });

    moviNum.textContent = moviesToShow.length;
}

function updatePagination(data) {
    const totalPages = Math.ceil(data.length / moviesPerPage);

    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.className = "page-item";

        const a = document.createElement("a");
        a.className = "page-link";
        a.textContent = i;

        // Sayfalama linkine tıklanma olayını ekleme
        a.addEventListener("click", function () {
            currentPage = i;
            displayMovies(data);
            updatePagination(data);
        });

        li.appendChild(a);
        paginationContainer.appendChild(li);
    }
}

fetch("https://pdp-movies-78.onrender.com/api/movies")
    .then((response) => response.json())
    .then((data) => {
        const genreMovies = filterMoviesByGenre(data);
        const searchedMovies = filterMoviesBySearch(genreMovies);
        displayMovies(searchedMovies);
        updatePagination(searchedMovies);

        moviNum.textContent = data.length; // Tüm filmlerin sayısını gösteren kodu ekledik
    })
    .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
    });

for (let listGroup of list_group_item) {
    listGroup.addEventListener("click", () => {
        for (let otherListGroup of list_group_item) {
            if (otherListGroup !== listGroup) {
                otherListGroup.classList.remove("active");
            }
        }
        listGroup.classList.add("active");

        selectedGenre = listGroup.textContent;
        fetch("https://pdp-movies-78.onrender.com/api/movies")
            .then((response) => response.json())
            .then((data) => {
                const genreMovies = filterMoviesByGenre(data);
                const searchedMovies = filterMoviesBySearch(genreMovies);
                displayMovies(searchedMovies);
                updatePagination(searchedMovies);

                moviNum.textContent = data.length; // Tüm filmlerin sayısını gösteren kodu ekledik
            })
            .catch((error) => {
                console.error("Xatolik yuz berdi:", error);
            });
    });
}

form_control.addEventListener("input", () => {
    searchQuery = form_control.value.trim();
    fetch("https://pdp-movies-78.onrender.com/api/movies")
        .then((response) => response.json())
        .then((data) => {
            const genreMovies = filterMoviesByGenre(data);
            const searchedMovies = filterMoviesBySearch(genreMovies);
            displayMovies(searchedMovies);
            updatePagination(searchedMovies);

            moviNum.textContent = data.length; // Tüm filmlerin sayısını gösteren kodu ekledik
        })
        .catch((error) => {
            console.error("Xatolik yuz berdi:", error);
        });
});

const table = document.createElement("table");
table.className = "table";

const thead = document.createElement("thead");
const tr = document.createElement("tr");

const th1 = document.createElement("th");
th1.className = "clickable";
th1.textContent = "Title";
tr.appendChild(th1);

const th2 = document.createElement("th");
th2.className = "clickable";
th2.textContent = "Genre";
tr.appendChild(th2);

const th3 = document.createElement("th");
th3.className = "clickable";
th3.textContent = "Stock";
tr.appendChild(th3);

const th4 = document.createElement("th");
th4.className = "clickable";
th4.textContent = "Rate";
const iTag = document.createElement("i");
iTag.className = "fa fa-sort-desc";
th4.appendChild(iTag);
tr.appendChild(th4);

const th5 = document.createElement("th");
th5.className = "clickable";
th5.textContent = "like";
tr.appendChild(th5);

thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);

const colDiv = document.createElement("div");
colDiv.className = "col";
colDiv.appendChild(table);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.className = "pagination";

nav.appendChild(ul);
colDiv.appendChild(nav);

containerDiv.appendChild(colDiv);
*/
/*
function initializeMovies() {
    // HTML elementlarni tanlash
    const list_group_item = document.querySelectorAll(".list-group-item");
    const bigBox = document.querySelector(".bigBox");
    const form_control = document.querySelector(".form-control");
    const moviNum = document.querySelector(".moviNum");
    const containerDiv = document.querySelector(".film");
    const tbody = document.createElement("tbody");

    // O'zgaruvchilarni va boshlang'ich qiymatlarini aniqlash
    let selectedGenre = 'All Genres';
    let currentPage = 1;
    const moviesPerPage = 4;
    let searchQuery = '';

    // Genre bo'yicha filmlarni filtratsiya qilish
    function filterMoviesByGenre(data) {
        // Agar tanlangan genre "All Genres" bo'lsa, barcha filmlarni qaytaradi
        const genreMovies = data.filter((movie) => {
            if (selectedGenre === 'All Genres') {
                return true;
            }
            // Aks holda, genre nomi bilan mos keladigan filmlarni qaytaradi
            return movie.genre.name === selectedGenre;
        });
        return genreMovies;
    }

    // Qidiruv so'roviga ko'ra filmlarni filtratsiya qilish
    function filterMoviesBySearch(data) {
        // Agar qidiruv so'rovi bo'sh bo'lsa, barcha filmlarni qaytaradi
        if (searchQuery.trim() === '') {
            return data;
        }

        // Aks holda, film nomi orqali qidiruvni amalga oshiradi
        const searchedMovies = data.filter((movie) => {
            const movieTitle = movie.title.toLowerCase();
            return movieTitle.includes(searchQuery.toLowerCase());
        });
        return searchedMovies;
    }

    // Filmlarni ko'rsatish
    function displayMovies(data) {
        tbody.innerHTML = '';

        // Sahifadagi filmlarni belgilash uchun indekslar
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = data.slice(startIndex, endIndex);

        moviesToShow.forEach((movie) => {
            const movieRow = document.createElement("tr");

            // Film sarlavhasini ko'rsatish
            const titleCell = document.createElement("td");
            const titleLink = document.createElement("a");
            titleLink.href = `/movies/${movie.id}`;
            titleLink.textContent = movie.title;
            titleLink.style.textDecoration = "none"
            titleCell.appendChild(titleLink);
            movieRow.appendChild(titleCell);

            // Film janrini ko'rsatish
            const genreCell = document.createElement("td");
            genreCell.textContent = movie.genre.name;
            movieRow.appendChild(genreCell);

            // Film omboridagi sonini ko'rsatish
            const stockCell = document.createElement("td");
            stockCell.textContent = movie.numberInStock;
            movieRow.appendChild(stockCell);

            // Film kiralash darajasi (rate)ni ko'rsatish
            const rateCell = document.createElement("td");
            rateCell.textContent = movie.dailyRentalRate;
            movieRow.appendChild(rateCell);

            // Bo'sh uchun qutilarni ko'rsatish
            const emptyCell = document.createElement("td");
            const iconElement = document.createElement("i");
            iconElement.className = "fa-regular fa-heart";
            iconElement.style.color = "#04070d";

            // Ikonga o'tish/uqish holatini almashtirish uchun hodisaga tegishli hodisalarni qo'shish
            iconElement.addEventListener("click", function () {
                if (iconElement.className.includes("fa-regular")) {
                    iconElement.className = "fa-solid fa-heart";
                } else {
                    iconElement.className = "fa-regular fa-heart";
                }
            });
            emptyCell.appendChild(iconElement);
            movieRow.appendChild(emptyCell);

            tbody.appendChild(movieRow);
        });

        moviNum.textContent = moviesToShow.length; // Ko'rsatilgan filmlar sonini ko'rsatish
    }

    // Sahifalarni yangilash
    function updatePagination(data) {
        const totalPages = Math.ceil(data.length / moviesPerPage);

        const paginationContainer = document.querySelector(".pagination");
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.className = "page-item";

            const a = document.createElement("a");
            a.className = "page-link";
            a.textContent = i;

            // Sahifalash linkiga klik qilganda
            a.addEventListener("click", function () {
                currentPage = i;
                displayMovies(data);
                updatePagination(data);
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }
    }

    // Ma'lumotlarni olish va filmlarni ko'rsatish
    function fetchDataAndDisplayMovies() {
        fetch("https://pdp-movies-78.onrender.com/api/movies")
            .then((response) => response.json())
            .then((data) => {
                const genreMovies = filterMoviesByGenre(data);
                const searchedMovies = filterMoviesBySearch(genreMovies);
                displayMovies(searchedMovies);
                updatePagination(searchedMovies);

                moviNum.textContent = data.length; // Barcha filmlar sonini ko'rsatish
            })
            .catch((error) => {
                console.error("Xatolik yuz berdi:", error);
            });
    }

    // Genre bo'yicha filtirlashni amalga oshirish
    function handleGenreClick(listGroup) {
        for (let otherListGroup of list_group_item) {
            if (otherListGroup !== listGroup) {
                otherListGroup.classList.remove("active");
            }
        }
        listGroup.classList.add("active");

        selectedGenre = listGroup.textContent;
        fetchDataAndDisplayMovies();
    }

    // Qidiruv so'rovini amalga oshirish
    function handleSearchInput() {
        searchQuery = form_control.value.trim();
        fetchDataAndDisplayMovies();
    }

    // Tugma va inputga hodisalar qo'shish
    for (let listGroup of list_group_item) {
        listGroup.addEventListener("click", () => {
            handleGenreClick(listGroup);
        });
    }

    form_control.addEventListener("input", () => {
        handleSearchInput();
    });

    // Jadval elementlarini yaratish
    const table = document.createElement("table");
    table.className = "table";

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.className = "clickable";
    th1.textContent = "Title";
    tr.appendChild(th1);

    const th2 = document.createElement("th");
    th2.className = "clickable";
    th2.textContent = "Genre";
    tr.appendChild(th2);

    const th3 = document.createElement("th");
    th3.className = "clickable";
    th3.textContent = "Stock";
    tr.appendChild(th3);

    const th4 = document.createElement("th");
    th4.className = "clickable";
    th4.textContent = "Rate";
    const iTag = document.createElement("i");
    iTag.className = "fa fa-sort-desc";
    th4.appendChild(iTag);
    tr.appendChild(th4);

    const th5 = document.createElement("th");
    th5.className = "clickable";
    th5.textContent = "like";
    tr.appendChild(th5);

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    const colDiv = document.createElement("div");
    colDiv.className = "col";
    colDiv.appendChild(table);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.className = "pagination";

    nav.appendChild(ul);
    colDiv.appendChild(nav);

    containerDiv.appendChild(colDiv);

    // Boshlang'ich ma'lumotlarni olish va filmlarni ko'rsatish
    fetchDataAndDisplayMovies();
}

// Filmlarni boshlash funksiyasini chaqirish
initializeMovies();
*/

function initializeMovies() {
    const list_group_item = document.querySelectorAll(".list-group-item");
    const bigBox = document.querySelector(".bigBox");
    const form_control = document.querySelector(".form-control");
    const moviNum = document.querySelector(".moviNum");
    const containerDiv = document.querySelector(".film");
    const tbody = document.createElement("tbody");

    let selectedGenre = 'All Genres';
    let currentPage = 1;
    const moviesPerPage = 4;
    let searchQuery = '';

    function filterMoviesByGenre(data) {
        return selectedGenre === 'All Genres'
            ? data
            : data.filter(movie => movie.genre.name === selectedGenre);
    }

    function filterMoviesBySearch(data) {
        return searchQuery.trim() === ''
            ? data
            : data.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    function displayMovies(data) {
        tbody.innerHTML = '';
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = data.slice(startIndex, endIndex);

        moviesToShow.forEach(movie => {
            const movieRow = document.createElement("tr");
            const titleCell = document.createElement("td");
            titleCell.style.paddingTop = "15px";
            titleCell.style.paddingBottom = "15px";
            const titleLink = document.createElement("a");
            titleLink.href = `/movies/${movie.id}`;
            titleLink.textContent = movie.title;
            titleLink.style.textDecoration = "none"
            titleCell.appendChild(titleLink);
            movieRow.appendChild(titleCell);

            const genreCell = document.createElement("td");
            genreCell.style.paddingTop = "15px";
            genreCell.style.paddingBottom = "15px";
            genreCell.textContent = movie.genre.name;
            movieRow.appendChild(genreCell);

            const stockCell = document.createElement("td");
            stockCell.style.paddingTop = "15px";
            stockCell.style.paddingBottom = "15px";
            stockCell.textContent = movie.numberInStock;
            movieRow.appendChild(stockCell);

            const rateCell = document.createElement("td");
            rateCell.style.paddingTop = "15px";
            rateCell.style.paddingBottom = "15px";
            rateCell.textContent = movie.dailyRentalRate;
            movieRow.appendChild(rateCell);

            const emptyCell = document.createElement("td");
            emptyCell.style.paddingTop = "10px";
            emptyCell.style.paddingBottom = "10px";
            const iconElement = document.createElement("i");
            iconElement.className = "fa-regular fa-heart";
            iconElement.style.color = "#04070d";
            iconElement.addEventListener("click", function () {
                iconElement.className = iconElement.className.includes("fa-regular")
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart";
            });
            emptyCell.appendChild(iconElement);
            movieRow.appendChild(emptyCell);

            tbody.appendChild(movieRow);
        });

        moviNum.textContent = moviesToShow.length;
    }

    function updatePagination(data) {
        const totalPages = Math.ceil(data.length / moviesPerPage);
        const paginationContainer = document.querySelector(".pagination");
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.className = "page-item";

            const a = document.createElement("a");
            a.className = "page-link";
            a.textContent = i;
            a.addEventListener("click", function () {
                currentPage = i;
                displayMovies(data);
                updatePagination(data);
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }
    }

    function fetchDataAndDisplayMovies() {
        fetch("https://pdp-movies-78.onrender.com/api/movies")
            .then(response => response.json())
            .then(data => {
                const genreMovies = filterMoviesByGenre(data);
                const searchedMovies = filterMoviesBySearch(genreMovies);
                displayMovies(searchedMovies);
                updatePagination(searchedMovies);
                moviNum.textContent = data.length;
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    function handleGenreClick(listGroup) {
        for (let otherListGroup of list_group_item) {
            if (otherListGroup !== listGroup) {
                otherListGroup.classList.remove("active");
            }
        }

        listGroup.classList.add("active");
        selectedGenre = listGroup.textContent;
        fetchDataAndDisplayMovies();
    }

    function handleSearchInput() {
        searchQuery = form_control.value.trim();
        fetchDataAndDisplayMovies();
    }

    list_group_item.forEach(listGroup => {
        listGroup.addEventListener("click", () => {
            handleGenreClick(listGroup);
        });
    });

    form_control.addEventListener("input", () => {
        handleSearchInput();
    });

    const table = document.createElement("table");
    table.className = "table";
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");

    th1.className = th2.className = th3.className = th4.className = th5.className = "clickable";
    th1.textContent = "Title";
    th2.textContent = "Genre";
    th3.textContent = "Stock";
    th4.textContent = "Rate";
    const iTag = document.createElement("i");
    iTag.className = "fa fa-sort-desc";
    th4.appendChild(iTag);
    //th5.textContent = "like";
    tr.append(th1, th2, th3, th4, th5);
    thead.appendChild(tr);
    table.append(thead, tbody);

    const colDiv = document.createElement("div");
    colDiv.className = "col";
    colDiv.appendChild(table);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.className = "pagination";
    nav.appendChild(ul);
    colDiv.appendChild(nav);
    containerDiv.appendChild(colDiv);

    fetchDataAndDisplayMovies();
}

initializeMovies();



