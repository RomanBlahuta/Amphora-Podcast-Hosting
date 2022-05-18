import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AmphoraSearchFieldModel} from './amphora-search-field.model';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {Subject} from 'rxjs';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'amphora-search-field',
    templateUrl: './amphora-search-field.component.html',
    styleUrls: ['./amphora-search-field.component.scss'],
})
export class AmphoraSearchFieldComponent implements OnInit, OnDestroy {

    @ViewChild('input', {static: true})
    public inputElementRef: ElementRef;

    @Input()
    public model: AmphoraSearchFieldModel;
    public searchIconModel: AmphoraIconModel;
    private unsubscribe$ = new Subject();

    constructor() { }

    public ngOnInit(): void {
        this.searchIconModel = AmphoraIconModel.create(IconsEnum.SEARCH, {
            size: {
                width: 16,
                height: 16,
            }
        });

        if (this.model.value$) {
            this.model.value$.pipe(
                takeUntil(this.unsubscribe$),
            ).subscribe((value) => {
                this.inputElementRef.nativeElement.value = value;
            });
        }
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public onInput(event: Event): void {
        if (this.model.optional.onInputListener) {
            const eventTarget = event.target as HTMLInputElement;
            this.model.optional.onInputListener(eventTarget.value, this.model);
        }
    }

}
