import {Component, Input, OnInit} from '@angular/core';
import {AmphoraPaginationModel} from './amphora-pagination.model';

@Component({
    selector: 'amphora-pagination',
    templateUrl: './amphora-pagination.component.html',
    styleUrls: ['./amphora-pagination.component.scss'],
})
export class AmphoraPaginationComponent implements OnInit {

    @Input()
    public model: AmphoraPaginationModel;

    constructor() { }

    public ngOnInit(): void {}

}
