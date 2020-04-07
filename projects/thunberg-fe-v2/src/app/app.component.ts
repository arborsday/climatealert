import { Component } from "@angular/core";
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private readonly iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack("solid", {
      packClass: "fas",
      iconClassPrefix: "fa"
    });
    this.iconLibraries.registerFontPack("regular", {
      packClass: "far",
      iconClassPrefix: "fa"
    });
    this.iconLibraries.registerFontPack("light", {
      packClass: "fal",
      iconClassPrefix: "fa"
    });
    this.iconLibraries.registerFontPack("duotone", {
      packClass: "fad",
      iconClassPrefix: "fa"
    });
    this.iconLibraries.registerFontPack("brands", {
      packClass: "fab",
      iconClassPrefix: "fa"
    });
    // this.iconLibraries.setDefaultPack("font-awesome-free");
    this.iconLibraries.registerSvgPack("misc", {
      blank: '<svg width="1" height="1"></svg> '
    });
  }
}
