import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    setItem(key: string, value: any): void {
        value = JSON.stringify(value);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(key, value);
        }
    }

    getItem(key: string): any {
        if (isPlatformBrowser(this.platformId)) {
            let value = localStorage.getItem(key);
            return JSON.parse(value);
        }
        return null;
    }
}
