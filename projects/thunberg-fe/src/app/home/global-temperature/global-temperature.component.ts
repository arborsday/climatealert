import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  HostListener,
} from "@angular/core";
import { GlobalTemperatureService } from "../services/global-temperature.service";

@Component({
  selector: "home-global-temperature",
  templateUrl: "./global-temperature.component.html",
  styleUrls: ["./global-temperature.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalTemperatureComponent implements OnInit, AfterViewInit {
  readonly meanTemps = [
    { year: 1750, tmp: 13.42 },
    { year: 1900, tmp: 13.72 },
    { year: 1966, tmp: 14.0 },
    { year: 2015, tmp: 14.85 },
    { year: 2016, tmp: 15.0 },
    { year: 2026, tmp: 23.1 },
  ];

  left;
  right;
  avg;
  year = 1880;

  meanTemps1750;
  meanTemps1966;
  co2data = [{ name: "CO2", series: [] }];
  dataSet = [
    { name: "since 1750", series: [] },
    { name: "since 1966", series: [] },
  ];

  get max() {
    return this.meanTemps.length - 1;
  }

  view: any[] = [700, 300];
  multi: any[];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Year";
  yAxisLabel: string = "Global Temperature(℃)";
  timeline: boolean = false;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };

  @ViewChild("slider", { read: ElementRef }) slider: ElementRef;
  @ViewChild("thumb", { read: ElementRef }) thumb: ElementRef;

  constructor(
    private readonly globalTemperatureService: GlobalTemperatureService,
    private readonly cd: ChangeDetectorRef,
    private readonly r2: Renderer2
  ) {}

  updateSlider($event) {
    const value = $event.target.value;
    const right = this.meanTemps1750.find((el) => el.year == value);
    const left = this.meanTemps1966.find((el) => el.year == value);
    this.right = right.temp;
    this.left = left.temp;
    this.avg = this.getAvg(this.left, this.right);
    this.updateThumbLocation();
  }

  getAvg(a, b) {
    return ((Number(a) + Number(b)) / 2).toFixed(1);
  }

  getCO2() {
    this.globalTemperatureService.getCO2().subscribe({
      next: (data: any) => {
        this.co2data = [
          {
            name: "CO2",
            series: data.map((el) => ({ name: el.year, value: el.trend })),
          },
        ];
     
      },
    });
  }
  ngOnInit(): void {
    this.getCO2();
    this.globalTemperatureService.getGlobalTemperature().subscribe({
      next: (data: any) => {
        this.meanTemps1750 = data.map((el) => {
          return { ...el, temp: (el.temp + 0.58).toFixed(1) };
        });
        this.meanTemps1966 = data.map((el) => ({
          ...el,
          temp: el.temp.toFixed(1),
        }));

        this.dataSet[0].series = this.meanTemps1750.map((el) => {
          return { name: el.year, value: el.temp };
        });

        this.dataSet[1].series = this.meanTemps1966.map((el) => {
          return { name: el.year, value: el.temp };
        });

        this.multi = this.dataSet;

        this.left = this.meanTemps1966[0].temp;
        this.right = this.meanTemps1750[0].temp;
        this.avg = this.getAvg(this.left, this.right);
        this.cd.markForCheck();
      },
    });
    this.setGraphView(globalThis.innerWidth);
  }

  ngAfterViewInit(): void {
    this.updateThumbLocation();
  }

  @HostListener("window:resize", ["$event"])
  onResize($event) {
    this.updateThumbLocation();
    this.setGraphView($event.currentTarget.innerWidth);
  }

  setGraphView(width) {
    if (width < 768) {
      this.view = [width * 0.9, 300];
      this.legend = false;
    } else {
      this.view = [700, 300];
      this.legend = true;
    }
  }

  updateThumbLocation() {
    const { clientWidth: width, min, max } = this.slider.nativeElement;
    const { clientWidth: thumbWidth } = this.thumb.nativeElement;
    const percent = (this.year - min) / (max - min);

    const x = (width - thumbWidth) * percent;
    const y = 0;

    this.r2.setStyle(this.thumb.nativeElement, "left", `${x}px`);
    this.r2.setStyle(this.thumb.nativeElement, "top", `${y}px`);
  }
}
