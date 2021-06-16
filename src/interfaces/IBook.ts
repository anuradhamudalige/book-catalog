export interface IBook{
    id: string;
    posterUrl: string;
    title: string;
    description?: string;
    date: string;
    shortDescription?: string;
    longDescription?: string;
    status?: string;
    authors?: string[];
    categories?: string[];
    pageCount?: number
}
