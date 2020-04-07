import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbSidebarService } from "@nebular/theme";
import { MenuItemsService } from "../services/menu-items.service";

@Component({
  selector: "layout-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  menuItems = [{ home: true, url: "#", title: "Climate Alert" }];
  get items() {
    return this.menuItemsService.items;
  }
  constructor(
    private readonly nbSidebarService: NbSidebarService,
    private readonly menuItemsService: MenuItemsService
  ) {}

  toggleSidebar() {
    this.nbSidebarService.toggle();
  }
}
