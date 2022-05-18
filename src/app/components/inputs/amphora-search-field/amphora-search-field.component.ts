import {Component, Input, OnInit} from '@angular/core';
import {AmphoraSearchFieldModel} from './amphora-search-field.model';

@Component({
    selector: 'amphora-search-field',
    templateUrl: './amphora-search-field.component.html',
    styleUrls: ['./amphora-search-field.component.scss'],
})
export class AmphoraSearchFieldComponent implements OnInit {

    @Input()
    public model: AmphoraSearchFieldModel;

    constructor() { }

    public ngOnInit(): void {}

}
