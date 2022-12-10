import { Component, OnInit } from '@angular/core';
import { IInspection } from '../models/dataModel.model';
import data from '../../assets/db.json';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})

export class InspectionDetailsComponent implements OnInit {
  Inspections: IInspection[] = data;

  constructor(){  }
  
  displayedColumns: string[] = ['inspectionId', 'inspectionDate', 'inspectionLocation', 'details'];

  ngOnInit(): void {
  }
}
