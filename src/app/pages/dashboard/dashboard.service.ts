import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/component-types/header-types.enum';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    constructor() {
    }

    public createHeader(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.USER);
    }
}
