import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraUploadImageModel} from './amphora-upload-image.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'amphora-upload-image',
  templateUrl: './amphora-upload-image.component.html',
  styleUrls: ['./amphora-upload-image.component.scss'],
})
export class AmphoraUploadImageComponent implements OnInit, OnDestroy {
    @Input()
    public model: AmphoraUploadImageModel;

    public uploadPrimaryIconModel: AmphoraIconModel;
    public uploadWhiteIconModel: AmphoraIconModel;
    public hover = false;
    public fileUrlReader = new FileReader();
    public imageUrl: string;
    public isUrlLoaded: boolean;
    public unsubscribe$ = new Subject();
    public fileName: string;
    public file: File;

    constructor() {}

    public onFileSelected(event) {
        const file: File = event.target.files[0];

        if (file) {
            this.file = file;
            this.fileName = file.name;
            this.fileUrlReader.readAsDataURL(file);
        }
    }

    public ngOnInit(): void {
        this.uploadPrimaryIconModel = AmphoraIconModel.create(IconsEnum.UPLOAD_PRIMARY, {
            size: {
                width: 128,
                height: 128,
            }
        });
        this.uploadWhiteIconModel = AmphoraIconModel.create(IconsEnum.UPLOAD_WHITE, {
            size: {
                width: 128,
                height: 128,
            }
        });

        this.model.imgSrcController$.pipe(
            takeUntil(this.unsubscribe$),
        ).subscribe(url => {
            this.imageUrl = url;
            this.isUrlLoaded = (url && url.length > 0);
        });

        this.fileUrlReader.onload = (event) => {
            this.model.onInput(this.file, event.target.result as string, this.fileName);
        };
    }

    public changeHoverStatus(value: boolean): void {
        this.hover = value;
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
