import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-data-v',
  templateUrl: './data-v.component.html',
  styleUrls: ['./data-v.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataVComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
