import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MenuItemsService } from "../services/menu-items.service";

@Component({
  selector: "layout-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  homeItem = [{ home: true, link: "/", title: "Climate Alert" }];
  get items() {
    return this.menuItemsService.items;
  }
  constructor(private readonly menuItemsService: MenuItemsService) {}

  ngOnInit() {}
}
