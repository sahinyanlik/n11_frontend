export interface IBook {
    id: number;
    name: string;
    author: IAuthor;
}

export interface IAuthor {
    id: number;
    name: string;
}

export interface IStatus {
    status: string;
}
