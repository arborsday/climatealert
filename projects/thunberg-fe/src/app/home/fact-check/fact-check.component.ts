import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  HostListener,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "home-fact-check",
  templateUrl: "./fact-check.component.html",
  styleUrls: ["./fact-check.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactCheckComponent implements OnInit, AfterViewInit {
  data = [
    {
      image:
        "https://1.bp.blogspot.com/-62udgCliDdU/XnC21nrP5_I/AAAAAAAAbis/Zmj5qzlu8XQGThaeiQr2od3HA-HdgJX7QCLcBGAsYHQ/s640/March-12-2020-469.png",
      org: "Arctic News",
      createdDate: "Mar 17, 2020",
      articleTitle: "Methane, Earthquake and Sudden Stratospheric Warming",
      author: "Sam Carana",
      content: `orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry’s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into`,
      link:
        "http://arctic-news.blogspot.com/2020/03/methane-earthquake-and-sudden-stratospheric-warming.html",
    },
    {
      video: "https://www.youtube.com/embed/zhp84LQUZBY",
      org: "CNN",
      createdDate: "Feb 28, 2020",
      articleTitle: `Locust swarms threaten the food supply of millions`,
      author: "CNN",
      content: `orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry’s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into`,
      link: "https://www.youtube.com/watch?v=zhp84LQUZBY&feature=emb_logo",
    },
    {
      image:
        "https://thumbs-prod.si-cdn.com/cBsPcGX4F7nXwdzxInz-7BFI-o4=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/3f/0b/3f0b0379-a6fd-496e-8a0c-1adc28772c46/87167583_3335109009848987_5761803102663475200_o.jpg",
      org: "Smart News",
      createdDate: "Feb 28, 2020",
      articleTitle: `This ‘Blood-Red’ Snow Is Taking
      Over Parts of Antarctica`,
      author: "By Lily Katzman",
      content: `orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry’s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into`,
      link:
        "https://www.smithsonianmag.com/smart-news/blood-red-snow-taking-over-parts-antarctica-180974309/",
    },
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
