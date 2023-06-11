import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NebularModule } from "../shared";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { GlobalTemperatureService } from "../home/services/global-temperature.service";
import { TakeActionComponent } from "./take-action.component";
import { ClipboardModule } from "ngx-clipboard";
import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    TakeActionComponent,
  ],
  imports: [
    CommonModule,
    NebularModule,
    ClipboardModule,
    CarouselModule.forRoot(),
  ],
  providers: [GlobalTemperatureService],
})
export class TakeActionModule {}
