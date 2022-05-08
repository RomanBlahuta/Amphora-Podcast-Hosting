import { Component, OnInit } from '@angular/core';
import {SignInService} from './sign-in.service';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';

@Component({
  selector: 'amphora-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

    public headerModel: AmphoraHeaderModel;
    public titleSectionModel: AmphoraSectionModel;
    public formSectionModel: AmphoraSectionModel;
    public submitSectionModel: AmphoraSectionModel;
    public submitButtonModel: AmphoraButtonModel;

    constructor(private signInService: SignInService) { }

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.headerModel = this.signInService.createHeader();
        this.titleSectionModel = this.signInService.createRegularSection();
        this.formSectionModel = this.signInService.createOrnamentedSection();
        this.submitSectionModel = this.signInService.createRegularSection();
        this.submitButtonModel = this.signInService.createSubmitButton();
    }

}
