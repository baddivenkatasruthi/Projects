let books = [];

function addBook() {
    const bookName = document.getElementById("bookName").value.trim();
    const authorName = document.getElementById("authorName").value.trim();

    if (bookName === "" || authorName === "") {
        alert("Please enter both Book and Author names.");
        return;
    }

    const book = {
        name: bookName,
        author: authorName,
        status: "Available"
    };

    books.push(book);
    displayBooks();

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

function displayBooks() {
    const tbody = document.querySelector("#bookTable tbody");
    tbody.innerHTML = "";

    books.forEach((book, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
            <td>
                <button class="action-btn" onclick="toggleStatus(${index})">${book.status === "Available" ? "Issue" : "Return"}</button>
                <button class="action-btn" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function toggleStatus(index) {
    books[index].status = books[index].status === "Available" ? "Issued" : "Available";
    displayBooks();
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}
