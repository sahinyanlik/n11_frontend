import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { IBook } from '../shared/interfaces';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'app-book',
    templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {

    books: IBook[] = [];
    editId: Number = 0;
    errorMessage: string;

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.dataService.getBooks()
            .subscribe((data: IBook[]) => this.books = data);
    }
}
