import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { GlobalTemperatureService } from "./services/global-temperature.service";
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private globalTemperatureService: GlobalTemperatureService,
    private clipboardService: ClipboardService
  ) {}

  get isDialogOn() {
    return this.globalTemperatureService.isDialogOn;
  }

  copy(cb) {
    this.clipboardService.copyFromContent(cb.textContent);
  }
  
  toggle() {
    this.globalTemperatureService.toggleDialog();
  }
  ngOnInit() {}

  trackByFn(i, e) {
    return e.name;
  }
}
