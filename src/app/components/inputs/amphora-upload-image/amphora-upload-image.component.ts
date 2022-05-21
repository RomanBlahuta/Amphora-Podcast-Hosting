import {Component, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';

@Component({
  selector: 'amphora-upload-image',
  templateUrl: './amphora-upload-image.component.html',
  styleUrls: ['./amphora-upload-image.component.scss'],
})
export class AmphoraUploadImageComponent implements OnInit {
    public uploadPrimaryIconModel: AmphoraIconModel;
    public uploadWhiteIconModel: AmphoraIconModel;
    public fileName = '';
    public hover = false;
    public fileReader = new FileReader();
    public imageUrl: string | ArrayBuffer;

    constructor() {}

    public onFileSelected(event) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.fileReader.readAsDataURL(file);

            const formData = new FormData();
            formData.append('thumbnail', file);
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
        this.fileReader.onload = (event) => this.imageUrl = event.target.result;
    }

    public changeHoverStatus(value: boolean): void {
        this.hover = value;
    }
}
