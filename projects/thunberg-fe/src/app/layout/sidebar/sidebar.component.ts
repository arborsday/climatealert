import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MenuItemsService } from "../services/menu-items.service";

@Component({
  selector: "layout-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  get items() {
    return this.menuItemsService.items;
  }

  ngOnInit(): void {}
}
