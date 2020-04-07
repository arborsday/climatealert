import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiscellaneousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
