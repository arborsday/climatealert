import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { NebularModule } from "../shared";
import { GlobalTemperatureComponent } from "./global-temperature/global-temperature.component";
import { GlobalTemperatureService } from "./services/global-temperature.service";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { FormsModule } from "@angular/forms";
import { FactCheckComponent } from "./fact-check/fact-check.component";
import { DataVComponent } from "./data-v/data-v.component";
import { TakeActionComponent } from "./take-action/take-action.component";
import { ClipboardModule } from "ngx-clipboard";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { SafePipe } from '../shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    GlobalTemperatureComponent,
    FactCheckComponent,
    DataVComponent,
    TakeActionComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    NebularModule,
    NgxChartsModule,
    FormsModule,
    ClipboardModule,
    CarouselModule.forRoot(),
  ],
  providers: [GlobalTemperatureService],
})
export class HomeModule {}
