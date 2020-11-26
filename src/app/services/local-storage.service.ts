import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    setItem(key: string, value: any): void {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    getItem(key: string): any {
        let value = localStorage.getItem(key);

        return JSON.parse(value);
    }
}
