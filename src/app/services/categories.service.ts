import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Category } from '../shared-components/feed/categories/categories.component';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    constructor(private http: HttpClient) { }

    private categories: Category[];

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('http://localhost:3000/categories').pipe(tap(categories => {
            this.categories = categories;
        }));
    }

    getCategoryBySlug(slug: string): Observable<Category> {
        return this.http.get<Category>('http://localhost:3000/categories/' + slug)
    }

    getLabelsFromIds(ids: number[]): Observable<string[]> {
        return this.http.get<string[]>('http://localhost:3000/categories/labels', {
            params: new HttpParams({
                fromObject: { ids: ids as any }
            })
        });
        // return ids.map(id => {
        //     return this.categories.find(e => e.id === id).label
        // });
    }


}
