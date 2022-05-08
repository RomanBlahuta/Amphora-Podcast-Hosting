import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraInputFieldModel} from './amphora-input-field.model';
import {take} from 'rxjs/operators';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';
import {BehaviorSubject, Subject} from 'rxjs';

interface IVisibility {
    icon: AmphoraIconModel;
    fieldType: InputFieldTypesEnum;
}

@Component({
  selector: 'amphora-input-field',
  templateUrl: './amphora-input-field.component.html',
  styleUrls: ['./amphora-input-field.component.scss'],
})
export class AmphoraInputFieldComponent implements OnInit, OnDestroy {
    @ViewChild('input', {static: true})
    public inputElementRef: ElementRef;

    @Input()
    public model: AmphoraInputFieldModel;

    public visibleIconModel: AmphoraIconModel;
    public invisibleIconModel: AmphoraIconModel;

    public InputFieldTypesEnum = InputFieldTypesEnum;

    public visibility$: Subject<IVisibility>;
    private visible = false;

    private unsubscribe$ = new Subject();

    constructor() { }

    public ngOnInit(): void {
        this.visibleIconModel = AmphoraIconModel.create(IconsEnum.VISIBLE, {size: {width:32, height: 32}});
        this.invisibleIconModel = AmphoraIconModel.create(IconsEnum.INVISIBLE, {size: {width:32, height: 32}});

        this.visibility$ = new BehaviorSubject({icon: this.visibleIconModel, fieldType: this.model.optional.inputType});

        if (this.model.value$) {
            this.model.value$.pipe(
                take(1),
            ).subscribe((value) => {
                this.inputElementRef.nativeElement.value = value;
            });
        }
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public toggleVisibility(): void {
        this.visible = !this.visible;

        this.visibility$.next({
            icon: this.visible ? this.invisibleIconModel : this.visibleIconModel,
            fieldType: this.visible ? InputFieldTypesEnum.TEXT : this.model.optional.inputType,
        });
    }

    public onInput(event: Event): void {
        if (this.model.optional.onInputListener) {
            const eventTarget = event.target as HTMLInputElement;
            this.model.optional.onInputListener(eventTarget.value, this.model);
        }
    }

}
