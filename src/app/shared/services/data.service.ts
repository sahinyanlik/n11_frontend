import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { IBook, IStatus } from '../interfaces';

@Injectable()
export class DataService {

    private url = 'http://localhost:8080/';

    constructor(private http: Http) { }

    getBooks(): Observable<IBook[]> {
        return this.http.get(this.url + 'books/get')
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    saveBook(book: IBook): Observable<IBook> {
        console.log('save');
        console.log(book);
        return this.http.post(this.url + 'books/create', book)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    updateBook(book: IBook): Observable<IBook> {
        console.log('update');
        console.log(book);
        return this.http.post(this.url + 'books/update', book)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    deleteBook(book: IBook): Observable<IStatus> {
        console.log('delete');
        return this.http.post(this.url + 'books/delete', book)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
