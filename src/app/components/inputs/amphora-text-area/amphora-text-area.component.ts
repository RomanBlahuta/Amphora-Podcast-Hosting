import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AmphoraTextAreaModel} from './amphora-text-area.model';

@Component({
  selector: 'amphora-text-area',
  templateUrl: './amphora-text-area.component.html',
  styleUrls: ['./amphora-text-area.component.scss'],
})
export class AmphoraTextAreaComponent implements OnInit, OnDestroy {
    @ViewChild('input', {static: true})
    public inputElementRef: ElementRef;

    @Input()
    public model: AmphoraTextAreaModel;

    private unsubscribe$ = new Subject();

    constructor() { }

    public ngOnInit(): void {
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
