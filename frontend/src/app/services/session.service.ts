import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SessionService {

    public setSessionItem(key: string, value: any): void {
        if (key && value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }

    public getSessionItem(key: string): any {
        if (key) {
            const value = sessionStorage.getItem(key);

            if (value) {
                return typeof value === 'string'
                ? JSON.parse(value)
                : value;
            }
        }

        return null;
    }

    public removeSessionItem(key?: string): void {
        if (key) {
            sessionStorage.removeItem(key);
            return;
        }

        sessionStorage.clear();
    }
}
