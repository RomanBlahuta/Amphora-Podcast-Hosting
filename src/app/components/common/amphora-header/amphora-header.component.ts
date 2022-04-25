import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'amphora-header',
  templateUrl: './amphora-header.component.html',
  styleUrls: ['./amphora-header.component.scss'],
})
export class AmphoraHeaderComponent implements OnInit {
    @Input()
    public model: any;

  constructor() { }

  public ngOnInit(): void {
      //
  }

}
