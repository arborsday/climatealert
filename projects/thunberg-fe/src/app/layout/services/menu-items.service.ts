import { Injectable } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Injectable()
export class MenuItemsService {
  readonly items: NbMenuItem[] = [
    {
      title: "EMERGENCY",
      url: "#climate"
    },
    {
      title: "DATA",
      url: "#data-v"
    },
    {
      title: "FACT CHECK",
      url: "#fact"
    },
    {
      title: "ACTION",
      url: "/take-action"
    },
    {
      title: "CONTACT",
      url: "#contact"
    }
  ];
  constructor() {}
}
