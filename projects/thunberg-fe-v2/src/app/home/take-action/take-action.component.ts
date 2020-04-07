import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-take-action',
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TakeActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
