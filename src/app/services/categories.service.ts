import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../shared-components/feed/categories/categories.component';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    private _$getCategories = new BehaviorSubject<Category[]>([]);
    $getCategories = this._$getCategories.asObservable();

    constructor(private http: HttpClient) { }


    dispatchGetCategories(): void {
        this.http.get<Category[]>('http://localhost:3000/categories').subscribe((categories) => {
            this._$getCategories.next(categories);
        });
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

    addCategory(body) {
        return this.http.post('http://localhost:3000/categories', body)
    }

    editCategory(id, body) {
        return this.http.put('http://localhost:3000/categories/' + id, body)

    }

    deleteCategory(id) {
        return this.http.delete('http://localhost:3000/categories/' + id)

    }


}
