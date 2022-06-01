import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraUploadAudioModel} from './amphora-upload-audio.model';
import {AmphoraAudioPlayerModel} from '../../common/amphora-audio-player/amphora-audio-player.model';

@Component({
  selector: 'amphora-upload-audio',
  templateUrl: './amphora-upload-audio.component.html',
  styleUrls: ['./amphora-upload-audio.component.scss'],
})
export class AmphoraUploadAudioComponent implements OnInit {

    @Input()
    public model: AmphoraUploadAudioModel;

    public uploadPrimaryIconModel: AmphoraIconModel;
    public uploadWhiteIconModel: AmphoraIconModel;

    public fileName = '';
    public hover = false;
    public fileReader = new FileReader();
    public audioUrl: string | ArrayBuffer;
    public playerModel: AmphoraAudioPlayerModel;

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
        this.fileReader.onload = (event) => {
            this.audioUrl = event.target.result;
            this.playerModel = AmphoraAudioPlayerModel.create(this.audioUrl as string);
        };
    }

    public changeHoverStatus(value: boolean): void {
        this.hover = value;
    }

}
