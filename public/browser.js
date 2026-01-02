console.log("FrontEnd JS ishga tushdi...");

let createField = document.getElementById("create-field");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then((resposnse) => {
        // console.log(resposnse);

        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(resposnse.data)); 
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Please, try again!", err);
    });
});

document.addEventListener("click", function(e) {
    // console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        e.preventDefault();
        if(confirm("Are you sure to delete this?")) {
            axios
            .post("/delete-me", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Please, try again!", err);
            });
        }
    }
});

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
                    <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
                </div>
            </li>`;
}