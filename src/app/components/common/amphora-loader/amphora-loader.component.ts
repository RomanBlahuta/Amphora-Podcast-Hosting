import { Component, OnInit } from '@angular/core';
import {IconsEnum} from '../../../shared/enums/icons.enum';

@Component({
    selector: 'amphora-loader',
    templateUrl: './amphora-loader.component.html',
    styleUrls: ['./amphora-loader.component.scss'],
})
export class AmphoraLoaderComponent implements OnInit {
    public IconsEnum = IconsEnum;

    constructor() { }

    ngOnInit() {}

}
