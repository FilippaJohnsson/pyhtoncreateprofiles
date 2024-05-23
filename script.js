const allMoviesTBody = document.querySelector("#movieTableBody");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const firstBtn = document.querySelector("#firstBtn");
const lastBtn = document.querySelector("#lastBtn");
const pageInfo = document.querySelector("#pageInfo");

let currentPage = 1;
const itemsPerPage = 20;
let json = null;

const showTable = function(moviesArray, page){
    allMoviesTBody.innerHTML = "";
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMovies = moviesArray.slice(startIndex, endIndex);

    for(let i = 0; i < paginatedMovies.length; i++) { 
        let trText = `<tr><th scope="row">${paginatedMovies[i].Givenname} ${paginatedMovies[i].Surname}</th><td>${paginatedMovies[i].Country}</td><td>${paginatedMovies[i].Birthday.substring(0,4)}</td></tr>`;
        allMoviesTBody.innerHTML += trText;
    }

    // Calculate pagination info
    const totalPages = Math.ceil(moviesArray.length / itemsPerPage);
    const firstItem = Math.min((page - 1) * itemsPerPage + 1, moviesArray.length);
    const lastItem = Math.min(page * itemsPerPage, moviesArray.length);

    // Update pagination info display
    pageInfo.textContent = `Page ${page} of ${totalPages}, Showing ${firstItem}-${lastItem} of ${moviesArray.length} items`;
};

fetch('./data.json')
    .then((response) => response.json())
    .then((jsonData) => {
        json = jsonData; // Assign jsonData to the global json variable
        showTable(json, currentPage);
    });

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showTable(json, currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    if (json) {
        const maxPage = Math.ceil(json.length / itemsPerPage);
        if (currentPage < maxPage) {
            currentPage++;
            showTable(json, currentPage);
        }
    }
});

firstBtn.addEventListener("click", () => {
    currentPage = 1;
    showTable(json, currentPage);
});

lastBtn.addEventListener("click", () => {
    const maxPage = Math.ceil(json.length / itemsPerPage);
    currentPage = maxPage;
    showTable(json, currentPage);
});
