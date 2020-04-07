import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  HostListener,
  Renderer2,
  AfterViewInit
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "home-fact-check",
  templateUrl: "./fact-check.component.html",
  styleUrls: ["./fact-check.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FactCheckComponent implements OnInit, AfterViewInit {
  data = [
    {
      video: "https://www.youtube.com/embed/zhp84LQUZBY",
      org: "Media Source Title",
      createdDate: "Feb 28, 2020",
      articleTitle: "Locust swarms threaten the food supply of millions",
      author: "By Writer’s Name",
      content: `orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry’s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into`
    },
    {
      video: "https://www.youtube.com/embed/zhp84LQUZBY",
      org: "Arctic News",
      createdDate: "Feb 28, 2020",
      articleTitle: `Methane, Earthquake and 
      Sudden Stratospheric Warming`,
      author: "By Sam Carana",
      content: `orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry’s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into`
    },
    {
      video: "https://www.youtube.com/embed/zhp84LQUZBY",
      org: "Smithsonian Magazine",
      createdDate: "Feb 28, 2020",
      articleTitle: `This ‘Blood-Red’ Snow Is Taking
      Over Parts of Antarctica`,
      author: "By Lily Katzman",
      content: `orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry’s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into`
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

  ngOnInit(): void {
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
