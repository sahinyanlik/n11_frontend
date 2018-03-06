import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { IBook, IStatus } from '../shared/interfaces';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'app-book',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

    books: IBook[] = [];
    selected: IBook;
    status: IStatus;
    editId: Number = 0;
    errorMessage: string;

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.getBooks();


    }

    getBooks() {
        this.dataService.getBooks()
            .subscribe((data: IBook[]) => this.books = data);
    }

    newBook() {
        this.selected = { name: '', id: 0, author: { name: '', id: 0 } };
    }

    bookSelected(book: IBook) {
        this.selected = book;
    }

    updateSelected(book: IBook) {
        console.log('Update Selected');
        console.log(book);
        this.dataService.updateBook(book)
            .subscribe((data: IBook) => this.selected = data);
    }

    saveBook(book: IBook) {
        console.log(book);
        this.dataService.saveBook(book)
            .subscribe((data: IBook) => this.selected = data);
        this.getBooks();
    }

    deleteSelected(book: IBook) {
        console.log(book);
        this.dataService.deleteBook(book)
            .subscribe((data: IStatus) => this.status = data);
        this.getBooks();
    }
}
