import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {IconsEnum} from '../../shared/enums/icons.enum';

@Injectable({
    providedIn: 'root',
})
export class IconsService {

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
        this.initCustomIcons();
    }

    private static getIconPath(icon: IconsEnum): string {
        return `assets/icon/${icon}.svg`;
    }

    private registerIcon(icon: string, path: string): void {
        const sanitizedSvg = this.domSanitizer.bypassSecurityTrustResourceUrl(path);
        this.matIconRegistry.addSvgIcon(icon, sanitizedSvg);
    }

    private initCustomIcons(): void {
        Object.values(IconsEnum).forEach(icon => {
            try {
                this.registerIcon(icon, IconsService.getIconPath(icon));
            } catch (err) {
                console.error(`ICON ERROR at: ${icon}\n`);
            }
        });
    }
}
