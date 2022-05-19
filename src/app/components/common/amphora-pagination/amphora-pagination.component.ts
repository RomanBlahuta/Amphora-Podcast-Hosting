import {Component, Input, OnInit} from '@angular/core';
import {AmphoraPaginationModel} from './amphora-pagination.model';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';
import {combineLatest, Observable} from 'rxjs';
import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {map} from 'rxjs/operators';

@Component({
    selector: 'amphora-pagination',
    templateUrl: './amphora-pagination.component.html',
    styleUrls: ['./amphora-pagination.component.scss'],
})
export class AmphoraPaginationComponent implements OnInit {
    @Input()
    public model: AmphoraPaginationModel;

    public backButtonModel: AmphoraButtonModel;
    public forwardButtonModel: AmphoraButtonModel;
    public numberedButtonModels: Observable<AmphoraButtonModel[]>;

    constructor() { }

    public ngOnInit(): void {
        this.backButtonModel = AmphoraButtonModel.create('', {
            onClick:  () => {
                if (this.model.optional.onClickBack) {
                    this.model.optional.onClickBack();
                }
            },
            buttonType: ButtonTypesEnum.OUTLINED,
            buttonColor: ButtonColorsEnum.DARK,
            size: {
                width: 32,
                height: 32,
            },
            disabled$: this.model.currentIndex$.pipe(map((currentPage) => currentPage === 1)),
            iconModel: AmphoraIconModel.create(IconsEnum.LAMBDA_LEFT, {
                size: {
                    width: 16,
                    height: 16,
                }
            })
        });

        this.forwardButtonModel = AmphoraButtonModel.create('', {
            onClick:  () => {
                if (this.model.optional.onClickForward) {
                    this.model.optional.onClickForward();
                }
            },
            buttonType: ButtonTypesEnum.OUTLINED,
            buttonColor: ButtonColorsEnum.DARK,
            disabled$: combineLatest(
                this.model.totalPages$,
                this.model.currentIndex$,
            ).pipe(map(([totalPages, currentPage]) => currentPage === totalPages)),
            size: {
                width: 32,
                height: 32,
            },
            iconModel: AmphoraIconModel.create(IconsEnum.LAMBDA_RIGHT, {
                size: {
                    width: 16,
                    height: 16,
                }
            })
        });

        this.numberedButtonModels = combineLatest(
            this.model.currentIndex$,
            this.model.displayedIndexes$
        ).pipe(
            map(([currentPage, displayedIdxs]) => displayedIdxs
            .map(pageNumber => pageNumber + 1)
            .map(pageNumber => AmphoraButtonModel.create(`${pageNumber}`, {
                onClick:  () => {
                    if (this.model.optional.onClickNumber) {
                        this.model.optional.onClickNumber(pageNumber);
                    }
                },
                buttonType: ButtonTypesEnum.OUTLINED,
                buttonColor: (pageNumber === currentPage) ? ButtonColorsEnum.PRIMARY : ButtonColorsEnum.DARK,
                size: {
                    width: 32,
                    height: 32,
                },
            }))),
        );
    }
}
