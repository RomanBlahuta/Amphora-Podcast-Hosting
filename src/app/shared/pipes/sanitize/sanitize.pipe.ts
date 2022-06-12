import { Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({ name: 'sanitize' })
export class SanitizePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    public transform(url): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
