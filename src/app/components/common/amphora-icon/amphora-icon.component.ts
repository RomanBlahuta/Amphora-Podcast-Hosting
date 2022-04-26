import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from './amphora-icon.model';

@Component({
  selector: 'amphora-icon',
  templateUrl: './amphora-icon.component.html',
  styleUrls: ['./amphora-icon.component.scss'],
})
export class AmphoraIconComponent implements OnInit {
    @Input()
    public model: AmphoraIconModel;

    constructor() { }

    public ngOnInit(): void {}

}
