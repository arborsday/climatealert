import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { GlobalTemperatureService } from "../home/services/global-temperature.service";

@Component({
  selector: "take-action",
  templateUrl: "./take-action.component.html",
  styleUrls: ["./take-action.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TakeActionComponent implements OnInit {
  constructor(
    private clipboardService: ClipboardService,
    private globalTemperatureService: GlobalTemperatureService
  ) {}

  ngOnInit(): void {}

  toggle() {
    this.globalTemperatureService.toggleDialog();
  }
  copy(cb) {
    this.clipboardService.copyFromContent(cb.textContent);
  }
}
