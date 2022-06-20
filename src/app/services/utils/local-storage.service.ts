import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from '../../../environments/environment';
import {LocalStorageStateEnum} from '../../shared/enums/local-storage-state.enum';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    constructor() {
    }

    public static isTokenSet(): boolean {
        return !!localStorage.getItem(LocalStorageStateEnum.TOKEN);
    }

    public set(key: LocalStorageStateEnum, value: string): void {
        localStorage.setItem(key, this.encrypt(value));
    }

    public get(key: LocalStorageStateEnum): string {
        if (localStorage.getItem(key)) {
            return this.decrypt(localStorage.getItem(key));
        }
        return null;
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
