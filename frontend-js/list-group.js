"use strict";

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



