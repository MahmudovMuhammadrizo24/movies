/*const list_group_item = document.querySelectorAll(".list-group-item");
const bigBox = document.querySelector(".bigBox")
const form_control = document.querySelector(".form-control");
const moviNum = document.querySelector(".moviNum");
const containerDiv = document.querySelector(".film");


for (let listGroup of list_group_item) {
    listGroup.addEventListener("click", () => {

        for (let otherListGroup of list_group_item) {
            if (otherListGroup !== listGroup) {
                otherListGroup.classList.remove("active");
            }
        }
        listGroup.classList.add("active");
    });
}

list_group_item.forEach(item => {
    item.addEventListener('click', () => {
        const selectedGenre = item.textContent;
        fetch("https://pdp-movies-78.onrender.com/api/movies")
            .then((response) => response.json())
            .then((data) => {
                const genreMovies = [];
                for (let i = 0; i < data.length; i++) {
                    if (selectedGenre === 'All Genres' || data[i].genre.name === selectedGenre) {
                        genreMovies.push(data[i]);
                    }
                }
                displayGenreMovies(genreMovies);
                moviNum.textContent = genreMovies.length;
            })


        const colDiv = document.createElement("div");
        colDiv.className = "col";

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


        function displayGenreMovies(data) {
            const tbody = document.createElement("tbody");
            data.forEach((movie) => {
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
        }
        table.appendChild(tbody);
        colDiv.appendChild(table);

        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.className = "pagination";


        for (let i = 1; i <= 4; i++) {
            const li = document.createElement("li");
            li.className = "page-item";

            const a = document.createElement("a");
            a.className = "page-link";
            a.textContent = i;

            li.appendChild(a);
            ul.appendChild(li);

            li.addEventListener("click", function () {
                ul.querySelectorAll(".page-item").forEach(function (item) {
                    item.classList.remove("active");
                });

                li.classList.add("active");

                // Additional actions when the li is toggled
            });
        }


        nav.appendChild(ul);
        colDiv.appendChild(nav);

        // Append the created elements to the desired container on your page

        containerDiv.appendChild(colDiv);
    })
        .catch((error) => {
            console.error("Xatolik yuz berdi:", error);
        });

});


input.addEventListener("input", () => {
    const searchQuery = input.value.toLowerCase();
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Eski filmlarni o'chiramiz

    data.forEach((movie) => {
        const movieTitle = movie.title.toLowerCase();
        if (movieTitle.includes(searchQuery)) {
            const movieRow = document.createElement("tr");
            // Qolgan tr ni yaratish va yozish kodlarini saqlab qoling
            // ...
            tbody.appendChild(movieRow);
        }
    });
});
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



form_control.value = movie.title;
*/





const list_group_item = document.querySelectorAll(".list-group-item");
const bigBox = document.querySelector(".bigBox");
const form_control = document.querySelector(".form-control");
const moviNum = document.querySelector(".moviNum");
const containerDiv = document.querySelector(".film");
const tbody = document.createElement("tbody");

for (let listGroup of list_group_item) {
    listGroup.addEventListener("click", () => {
        for (let otherListGroup of list_group_item) {
            if (otherListGroup !== listGroup) {
                otherListGroup.classList.remove("active");
            }
        }
        listGroup.classList.add("active");

        const selectedGenre = listGroup.textContent;
        fetch("https://pdp-movies-78.onrender.com/api/movies")
            .then((response) => response.json())
            .then((data) => {
                const genreMovies = [];
                for (let i = 0; i < data.length; i++) {
                    if (selectedGenre === 'All Genres' || data[i].genre.name === selectedGenre) {
                        genreMovies.push(data[i]);
                    }
                }
                displayGenreMovies(genreMovies);
                moviNum.textContent = genreMovies.length;
            })
            .catch((error) => {
                console.error("Xatolik yuz berdi:", error);
            });
    });
}

function displayGenreMovies(data) {
    tbody.innerHTML = '';

    data.forEach((movie) => {
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
}

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

for (let i = 1; i <= 4; i++) {
    const li = document.createElement("li");
    li.className = "page-item";

    const a = document.createElement("a");
    a.className = "page-link";
    a.textContent = i;

    li.appendChild(a);
    ul.appendChild(li);

    li.addEventListener("click", function () {
        ul.querySelectorAll(".page-item").forEach(function (item) {
            item.classList.remove("active");
        });

        li.classList.add("active");

        // Additional actions when the li is toggled
    });
}

nav.appendChild(ul);
colDiv.appendChild(nav);

containerDiv.appendChild(colDiv);

form_control.addEventListener("input", () => {
    const searchQuery = form_control.value.toLowerCase();
    tbody.innerHTML = "";

    const genreMovies = Array.from(tbody.children);
    genreMovies.forEach((movie) => {
        const movieTitle = movie.firstChild.firstChild.textContent.toLowerCase();
        if (movieTitle.includes(searchQuery)) {
            tbody.appendChild(movie);
        }
    });
});
