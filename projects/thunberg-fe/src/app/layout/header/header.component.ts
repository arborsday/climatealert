import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbSidebarService, NbMenuItem } from "@nebular/theme";
import { MenuItemsService } from "../services/menu-items.service";

@Component({
  selector: "layout-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
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
