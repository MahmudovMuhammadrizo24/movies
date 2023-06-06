"use strict";

function initializeMovies() {
    const list_group_item = document.querySelectorAll(".list-group-item");
    const bigBox = document.querySelector(".big-box");
    const form_control = document.querySelector(".form-control");
    const moviNum = document.querySelector(".moviNum");
    const containerDiv = document.querySelector(".film");


    //create
    const tbody = document.createElement("tbody");

    let selectedGenre = "All Genres";
    let currentPage = 1;
    const moviesPerPage = 4;
    let searchQuery = '';

    function filterMoviesByGenre(data) {
        return searchQuery.trim() === 'ALL Genres'
            ? data
            : data.filtr(movie => movie.gener.name === selectedGenre)
    }
    function filterMoviesBySearch(data) {
        return searchQuery.trim() === ''
            ? data
            : data.filtr(movie => movie.title.toLowerCase().includes(selectedQuery.toLowerCase()));
    }
    function displayMovies(data) {
        tbody.innerHTML = '';
        const startIndex = (currentPage - 1) * movoesPerPage;
        const endIndex = (startIndex + 1) * movoesPerPage;
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












}














