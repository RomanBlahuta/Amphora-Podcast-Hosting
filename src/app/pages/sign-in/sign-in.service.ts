import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/header-types.enum';


@Injectable({
    providedIn: 'root',
})
export class SignInService {
    constructor(private store$: Store) {
    }

    public createHeaderModel(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.SIGN_UP);
    }
}
