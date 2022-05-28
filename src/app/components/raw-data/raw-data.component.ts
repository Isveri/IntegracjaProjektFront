import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {StatisticsService} from "../../services/statistics.service";


@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.scss']
})
export class RawDataComponent implements OnInit {


  constructor(private alertService: AlertService, private statisticsService:StatisticsService) {
  }

  ngOnInit(): void {
    this.loadData();
  }


  loadData() {

  }
  downloadXML(){
    this.statisticsService.downloadXMLFile().subscribe( (response: any) =>{
      let filename="data.xml"
      let dataType = response.type;
      let binaryData = [];
      binaryData.push(response);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      if (filename)
        downloadLink.setAttribute('download', filename);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      this.alertService.success("Ur file is downloading")
    },error => this.alertService.error("Error while downloading file"));
  }
  downloadJSON(){
    this.statisticsService.downloadJsonFile().subscribe((response: any) =>{
      let filename="data.json"
      let dataType = response.type;
      let binaryData = [];
      binaryData.push(response);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      if (filename)
        downloadLink.setAttribute('download', filename);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      this.alertService.success("Ur file is downloading")
      console.log("json")

    },error => this.alertService.error("Error while downloading file"));
  }
}
