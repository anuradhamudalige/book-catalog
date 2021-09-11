import {HttpService} from "./http.service";
import {IBook} from "../interfaces/IBook";
import {AxiosPromise} from "axios";

export class BookService {
    static instance: BookService;
    private serviceEndPoint = '/books';

    static getInstance() {
        if(BookService.instance === undefined) {
            BookService.instance = new BookService();
        }
        return BookService.instance;
    }

    getBookList(): AxiosPromise {
        return HttpService.getInstance().get<IBook[]>(this.serviceEndPoint);
    }

    getBook(bookId: string): AxiosPromise {
        return HttpService.getInstance().get<IBook>(`${this.serviceEndPoint}${bookId}`);
    }
}
