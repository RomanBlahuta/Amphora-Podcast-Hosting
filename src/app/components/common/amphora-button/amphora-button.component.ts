import {Component, Input, OnInit} from '@angular/core';
import {AmphoraButtonModel} from './amphora-button.model';

@Component({
  selector: 'amphora-button',
  templateUrl: './amphora-button.component.html',
  styleUrls: ['./amphora-button.component.scss'],
})
export class AmphoraButtonComponent implements OnInit {
    @Input()
    public model: AmphoraButtonModel;

    constructor() { }

    public ngOnInit(): void {}

    public onClick() {
        if (this.model.optional.onClick) {
            this.model.optional.onClick();
        }
    }

}
