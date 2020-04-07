import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

import { NebularModule } from "../shared";
import { HomeModule } from "../home/home.module";

import { LayoutComponent } from "./layout.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MenuItemsService } from "./services/menu-items.service";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, NebularModule, HomeModule],
  providers: [MenuItemsService]
})
export class LayoutModule {}
