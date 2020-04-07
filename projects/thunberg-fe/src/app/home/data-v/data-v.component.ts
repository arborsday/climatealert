import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "home-data-v",
  templateUrl: "./data-v.component.html",
  styleUrls: ["./data-v.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataVComponent implements OnInit, AfterViewInit {
  data = [
    {
      video: "https://climate.nasa.gov/interactives/climate_time_machine"
    }
  ];

  @ViewChild("wrapper", { read: ElementRef }) wrapper: ElementRef;
  @HostListener("window:resize")
  onResize() {
    this.centerFactCheck();
  }

  centerFactCheck() {
    const { scrollWidth, clientWidth } = this.wrapper.nativeElement;
    const scrollMax = scrollWidth - clientWidth;

    this.r2.setProperty(
      this.wrapper.nativeElement,
      "scrollLeft",
      scrollMax / 2
    );
  }
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly r2: Renderer2
  ) {}
  ngAfterViewInit(): void {
    this.centerFactCheck();
  }

  ngOnInit(): void {}

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
