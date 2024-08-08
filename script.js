document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-bar button');
    
    function renderBooks(books) {
        bookList.innerHTML = '';
        if (books.length === 0) {
            const noBooksMessage = document.createElement('div');
            noBooksMessage.classList.add('no-books');
            noBooksMessage.textContent = 'No books found';
            bookList.appendChild(noBooksMessage);
        } else {
            books.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');
                bookCard.innerHTML = `
                    <img src="${book.image}" alt="${book.title}">
                    <div class="book-details">
                        <h3>${book.title}</h3>
                        <p class="author">by ${book.author}</p>
                        <p>${book.description}</p>
                    </div>
                `;
                bookList.appendChild(bookCard);
                setTimeout(() => bookCard.classList.add('fade-in'), 100);
            });
        }
    }

    function debounce(func, delay) {
        let debounceTimer;
        return function(...args) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    function searchBooks() {
        searchButton.classList.add('loading');
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
        setTimeout(() => {
            renderBooks(filteredBooks);
            searchButton.classList.remove('loading');
        }, 500);
    }

    searchInput.addEventListener('input', debounce(searchBooks, 300));

    searchButton.addEventListener('click', () => {
        searchButton.classList.add('search-active');
        setTimeout(() => searchButton.classList.remove('search-active'), 300);
    });
    renderBooks(books);
});
