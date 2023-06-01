fetch("https://pdp-movies-78.onrender.com/api/movies")
    .then((response) => response.json())
    .then((data) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col";

        const pTag = document.createElement("p");
        pTag.textContent = "Showing 12 movies in the database.";
        colDiv.appendChild(pTag);

        const input = document.createElement("input");
        input.type = "text";
        input.name = "query";
        input.className = "form-control my-3";
        input.placeholder = "Search...";
        colDiv.appendChild(input);

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
        tr.appendChild(th5);

        thead.appendChild(tr);
        table.appendChild(thead);

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
            movieRow.appendChild(emptyCell);

            tbody.appendChild(movieRow);
        });

        table.appendChild(tbody);
        colDiv.appendChild(table);

        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.className = "pagination";

        for (let i = 1; i <= 3; i++) {
            const li = document.createElement("li");
            li.className = i === 1 ? "page-item active" : "page-item";
            const a = document.createElement("a");
            a.className = "page-link";
            a.textContent = i;
            li.appendChild(a);
            ul.appendChild(li);
        }

        nav.appendChild(ul);
        colDiv.appendChild(nav);

        // Append the created elements to the desired container on your page
        const containerDiv = document.getElementById("container");
        containerDiv.appendChild(colDiv);
    })
    .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
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



