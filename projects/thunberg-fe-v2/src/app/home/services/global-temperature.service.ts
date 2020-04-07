import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable()
export class GlobalTemperatureService {
  constructor(private readonly http: HttpClient) {}

  getGlobalTemperature() {
    const url = environment.production
      ? "https://arborsday.github.io/climatealert/assets/data/global_temperature.json"
      : "/assets/data/global_temperature.json";
    return this.http.get(url);
  }
}
