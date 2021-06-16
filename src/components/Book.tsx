import React, {useState} from 'react';
import {IBook} from "../interfaces/IBook";
import poster from '../assets/images/n_a.jpg'
import './Book.css'

interface Props {
    book: IBook;
    getDetail: (id: string) => void;
}

export const Book: React.FC<Props> = (props: Props) => {
    const {book, getDetail} = props;

    const [isDetail, setDetail] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState<string | undefined>(book.posterUrl);
    const [dateString, setDateString] = useState<string>((new Date(book.date)).getFullYear().toString());

    const onError = () => setImgSrc(poster);
    const handleClick = () => {

        const isGoingToDetail = !isDetail;

        setDetail(isGoingToDetail);

        isGoingToDetail ? onDetail() : onSummary();

    }

    const onDetail = () => {
        setDateString((new Date(book.date)).toLocaleDateString());
        getDetail(book.id);
    }

    const onSummary = () => {
        setDateString((new Date(book.date)).getFullYear().toString());
    }

    return (
        <div className="Book card">
            <div className={isDetail ? 'poster poster-detail': 'poster'}>
                <img
                    src={imgSrc || poster}
                    onError={onError}
                    alt="Book Thumbnail"
                />
            </div>
            <div className="content">
                <h3>{book.title}</h3>
                <div className="detail">
                    {isDetail ?<>
                        <section>
                            <h5>Authors</h5>
                            <p><i>{book.authors?.join(', ')}</i></p>
                        </section>
                        <section>
                            <h5>Description</h5>
                            <p>{book.longDescription ? book.longDescription : 'N/A'}</p>
                        </section>
                        <section>
                            <p>Pages: {book.pageCount}</p>
                        </section>
                        <section>
                            <p>Categories: {book.categories?.join(', ')}</p>
                        </section>
                    </> : <>
                        <section>
                            <h5 className="authors">By {book.authors?.join(', ')}</h5>
                            <p>{book.shortDescription}</p>
                        </section>
                    </>
                    }
                </div>
                <div className="footer">
                    <p>{dateString}</p>
                    <button onClick={handleClick}>{!isDetail ? 'Details ▼' : 'Summary ▲'}</button>
                </div>
            </div>
        </div>
    );
}

