import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraUploadAudioModel} from './amphora-upload-audio.model';
import {AmphoraAudioPlayerModel} from '../../common/amphora-audio-player/amphora-audio-player.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'amphora-upload-audio',
  templateUrl: './amphora-upload-audio.component.html',
  styleUrls: ['./amphora-upload-audio.component.scss'],
})
export class AmphoraUploadAudioComponent implements OnInit {

    @Input()
    public model: AmphoraUploadAudioModel;

    @ViewChild('fileUpload')
    public fileUpload: ElementRef;

    public uploadPrimaryIconModel: AmphoraIconModel;
    public uploadWhiteIconModel: AmphoraIconModel;

    public fileName = '';
    public hover = false;
    public file: File;
    public fileReader = new FileReader();
    public playerModel$: Observable<AmphoraAudioPlayerModel>;

    constructor() {}

    public onFileSelected(event) {
        const file: File = event.target.files[0];

        if (file) {
            this.fileUpload.nativeElement.value = '';
            this.file = file;
            this.fileName = file.name;
            this.fileReader.readAsDataURL(file);
        }
    }

    public ngOnInit(): void {
        console.log('init');
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

        this.playerModel$ = this.model.audioSrcController$.pipe(
            map(url => url ? AmphoraAudioPlayerModel.create(url as string) : null),
        );

        this.fileReader.onload = (event) => {
            this.model.onInput(this.file, event.target.result as string, this.fileName);
        };
    }

    public changeHoverStatus(value: boolean): void {
        this.hover = value;
    }

}
