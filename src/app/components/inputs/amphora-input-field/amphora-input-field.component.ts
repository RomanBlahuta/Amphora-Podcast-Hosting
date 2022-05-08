import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraInputFieldModel} from './amphora-input-field.model';
import {take} from 'rxjs/operators';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';

@Component({
  selector: 'amphora-input-field',
  templateUrl: './amphora-input-field.component.html',
  styleUrls: ['./amphora-input-field.component.scss'],
})
export class AmphoraInputFieldComponent implements OnInit {
    @ViewChild('input', {static: true})
    public inputElementRef: ElementRef;

    @Input()
    public model: AmphoraInputFieldModel;

    public visibilityIconModel: AmphoraIconModel;
    public IconsEnum = IconsEnum;
    public InputFieldTypesEnum = InputFieldTypesEnum;

    private visibilityIcon: IconsEnum;
    private visible: boolean;

    constructor() { }

    public ngOnInit(): void {
        this.visible = this.model.optional.inputType !== InputFieldTypesEnum.PASSWORD;
        this.visibilityIcon = IconsEnum.VISIBLE;
        this.visibilityIconModel = AmphoraIconModel.create(this.visibilityIcon, {size: {width:32, height: 32}});

        if (this.model.value$) {
            this.model.value$.pipe(
                take(1),
            ).subscribe((value) => {
                this.inputElementRef.nativeElement.value = value;
            });
        }
    }

    public toggleVisibility(): void {
        console.log('Toggle visibility');
        if (this.visible) {
            this.visibilityIcon = IconsEnum.INVISIBLE;
            this.model.optional.inputType = InputFieldTypesEnum.TEXT;
        } else {
            this.visibilityIcon = IconsEnum.VISIBLE;
            this.model.optional.inputType = InputFieldTypesEnum.PASSWORD;
        }
    }

    public onInput(event: Event): void {
        if (this.model.optional.onInputListener) {
            const eventTarget = event.target as HTMLInputElement;
            this.model.optional.onInputListener(eventTarget.value, this.model);
        }
    }

}
