import React, {useEffect, useState} from 'react';
import './App.css';
import {IBook} from "./interfaces/IBook";
import {BookList} from "./components/BookList";
import {BookService} from "./services/book.service";

function App() {
    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        document.title = "Book Catalog"
        BookService.getInstance().getBookList().then(response => {
            setBooks(response.data);
        });
    }, []);

    const getDetail = (id: string) => {
        BookService.getInstance().getBook(id).then(response => {

            const newBooks = [...books];
            const bookIndex = newBooks.findIndex(item => item.id === id);
            newBooks[bookIndex] = response.data;
            setBooks(newBooks);
        });
    }

    return (
        <div className="App">
            <BookList bookList={books} getDetail={getDetail}/>
        </div>
    );
}

export default App;
