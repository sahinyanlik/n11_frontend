import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { IBook } from '../interfaces';

@Injectable()
export class DataService {

    private url = 'http://localhost:8080/';

    constructor(private http: Http) { }

    getBooks(): Observable<IBook[]> {
        return this.http.get(this.url + 'books/get')
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
