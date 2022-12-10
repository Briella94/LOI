import { Component, OnInit, Pipe } from '@angular/core';
import { IInspection } from '../models/dataModel.model';
import { ActivatedRoute } from '@angular/router';
import data from '../../assets/db.json';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})

export class InspectionDetailsComponent implements OnInit {
  Inspections: IInspection[] = data;

  constructor(private route: ActivatedRoute){  }
  
  displayedColumns: string[] = ['inspectionId', 'inspectionDate', 'inspectionLocation', 'details'];

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        var providedId = params['clickedId'];
        console.log(providedId);
      })
  }
}