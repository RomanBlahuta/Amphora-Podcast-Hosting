import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    constructor() {
    }

    public set(key: string, value: string): void {
        try {
            localStorage.setItem(key, this.encrypt(value));
        } catch (e) {
            localStorage.setItem(key, value);
        }
    }

    public get(key: string): string {
        try {
            return this.decrypt(localStorage.getItem(key));
        } catch (e) {
            return localStorage.getItem(key);
        }
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }

    private encrypt(value: string): string {
        return CryptoJS.AES.encrypt(JSON.stringify([{
            value,
        }])).toString();
    }

    private decrypt(msg: string): string {
        const bytes = CryptoJS.AES.decrypt(msg);
        const decryptedData = JSON.parse(bytes.toString());

        return decryptedData[0].value;
    }
}
