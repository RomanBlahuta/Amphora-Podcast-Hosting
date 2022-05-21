import {Component, Input, OnInit} from '@angular/core';
import {AmphoraSeriesTagModel} from './amphora-series-tag.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
    selector: 'amphora-series-tag',
    templateUrl: './amphora-series-tag.component.html',
    styleUrls: ['./amphora-series-tag.component.scss'],
})
export class AmphoraSeriesTagComponent implements OnInit {
    @Input()
    public model: AmphoraSeriesTagModel;
    public active$: Observable<boolean>;

    constructor() { }

    public ngOnInit(): void {
        this.active$ = this.model.optional.active$ || new BehaviorSubject(false);
    }

    public onClick(): void {
        if (this.model.optional.onClick) {
            this.model.optional.onClick();
        }
    }
}
