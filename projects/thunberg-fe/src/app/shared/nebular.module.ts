import { NgModule } from "@angular/core";

import {
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule,
  NbIconModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbCardModule,
  NbUserModule,
  NbContextMenuModule,
  NbMenuModule
} from "@nebular/theme";

@NgModule({
  exports: [
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    NbActionsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbCardModule,
    NbUserModule,
    NbContextMenuModule,
    NbMenuModule
  ]
})
export class NebularModule {}
