import { Injectable } from "@angular/core";
import { NbMenuItem } from '@nebular/theme';

@Injectable()
export class MenuItemsService {
  readonly items: NbMenuItem[] = [
    {
      title: "EMERGENCY"
    },
    {
      title: "DATA"
    },
    {
      title: "FACT CHECK"
    },
    {
      title: "ACTION"
    },
    {
      title: "CONTACT"
    }
  ];
  constructor() {}
}
