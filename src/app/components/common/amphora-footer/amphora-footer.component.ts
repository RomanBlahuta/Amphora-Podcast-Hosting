import { Component, OnInit } from '@angular/core';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Component({
    selector: 'amphora-footer',
    templateUrl: './amphora-footer.component.html',
    styleUrls: ['./amphora-footer.component.scss'],
})
export class AmphoraFooterComponent implements OnInit {
    public RoutesEnum = RoutesEnum;

    constructor() { }

    public ngOnInit(): void {}

}
