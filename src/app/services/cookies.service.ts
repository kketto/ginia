import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookiesService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    get(key: string): string {
        if (!isPlatformBrowser(this.platformId)) {
            return null;
        }
        const name = `${key}=`;
        const cookieString = document.cookie || '';
        const allCookies = cookieString.split(';');

        for (const cookie of allCookies) {
            let result = cookie;
            while (result.charAt(0) === ' ') {
                result = result.substring(1);
            }

            if (result.indexOf(name) === 0) {
                return result.substring(name.length, cookie.length);
            }
        }
    }

    set(key: string, value: string, minutes?: number): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        let cookie = `${key}=${value};`;
        if (minutes) {
            const d = new Date(new Date().getTime() + minutes * 60000);
            const expires = `expires=${d.toUTCString()}`;
            cookie += `${expires};`;
        }
        document.cookie = `${cookie} path=/;`;
    }

    delete(key: string): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
    }
}