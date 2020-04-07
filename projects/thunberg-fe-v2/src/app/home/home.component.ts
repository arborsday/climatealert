import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {}

  trackByFn(i, e) {
    return e.name;
  }
}
