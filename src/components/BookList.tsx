import React from 'react';
import {IBook} from "../interfaces/IBook";
import {Book} from "./Book";
import './BookList.css'

interface Props {
    bookList: IBook[];
    getDetail: (id: string) => void;
}

export const BookList: React.FC<Props> = (props: Props) => {
    const {bookList} = props;
    const {getDetail} = props;

    const bookElements = bookList.map(book => {
        return (
            <div className="book-outer" key={book.id}>
                <Book book={book} getDetail={getDetail}/>
            </div>
        )
    });

    return (
        <>
            {bookElements}
        </>
    )
}
