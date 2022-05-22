import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    constructor() {
    }

    public set(key: string, value: string): void {
        localStorage.setItem(key, this.encrypt(value));
    }

    public get(key: string): string {
        return this.decrypt(localStorage.getItem(key));
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }

    private encrypt(value: string): string {
        return CryptoJS.AES.encrypt(value, environment.secret).toString();
    }

    private decrypt(msg: string): string {
        const bytes = CryptoJS.AES.decrypt(msg, environment.secret);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}
