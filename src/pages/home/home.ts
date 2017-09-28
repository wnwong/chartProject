import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ZoomingData, Service} from "../../providers/chart-service/chart-service";
import {DxPieChartComponent} from "devextreme-angular";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(DxPieChartComponent) chart: any;
  zoomingData: ZoomingData[];
  selectedRegion = "";

  constructor(public navCtrl: NavController, public service: Service) {
    this.zoomingData = service.getZoomingData();
  }

  onInitialized(e: any) {
    e.component.zoomArgument(100,200);
  }

  pointClick(e: any) {
    var point = e.target;
    point.showTooltip();
    this.selectedRegion = point.argument;
  }

  customizeTooltip(arg: any) {
    return {
      text: arg.argumentText + "<br/>" + arg.valueText
    };
  }
}
