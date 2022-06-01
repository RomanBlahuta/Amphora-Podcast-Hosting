import {Component, Input, OnInit} from '@angular/core';
import {EpisodeTypesEnum} from '../../../shared/enums/episode-types.enum';
import {AmphoraOptionsSelectModel} from './amphora-options-select.model';

@Component({
    selector: 'amphora-options-select',
    templateUrl: './amphora-options-select.component.html',
    styleUrls: ['./amphora-options-select.component.scss'],
})
export class AmphoraOptionsSelectComponent implements OnInit {
    @Input()
    public model: AmphoraOptionsSelectModel;
    public currentOption: EpisodeTypesEnum = EpisodeTypesEnum.FULL;
    public EpisodeTypesEnum = EpisodeTypesEnum;

    constructor() { }

    public ngOnInit(): void {}

    public onOptionClick(option: EpisodeTypesEnum): void {
        if (this.model.optional.onOptionClick) {
            this.model.optional.onOptionClick(option);
        }
    }
}
