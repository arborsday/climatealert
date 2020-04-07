import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { NebularModule } from "../shared";
import { GlobalTemperatureComponent } from "./global-temperature/global-temperature.component";
import { GlobalTemperatureService } from "./services/global-temperature.service";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { FormsModule } from "@angular/forms";
import { FactCheckComponent } from './fact-check/fact-check.component';
import { DataVComponent } from './data-v/data-v.component';
import { TakeActionComponent } from './take-action/take-action.component';

@NgModule({
  declarations: [HomeComponent, GlobalTemperatureComponent, FactCheckComponent, DataVComponent, TakeActionComponent],
  imports: [CommonModule, NebularModule, NgxChartsModule, FormsModule],
  providers: [GlobalTemperatureService]
})
export class HomeModule {}
