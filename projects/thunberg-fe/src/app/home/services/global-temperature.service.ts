import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable()
export class GlobalTemperatureService {
  readonly baseurl = "https://arborsday.github.io/climatealert";
  isDialogOn = false;
  constructor(private readonly http: HttpClient) {}

  toggleDialog() {
    this.isDialogOn = !this.isDialogOn;
  }
  
  getGlobalTemperature() {
    const url = environment.production
      ? `${this.baseurl}/assets/data/global_temperature.json`
      : "/assets/data/global_temperature.json";
    return this.http.get(url);
  }

  getCO2() {
    const url = environment.production
      ? `${this.baseurl}/assets/data/co2_mm_mlo.json`
      : "/assets/data/co2_mm_mlo.json";
    return this.http.get(url);
  }
}
