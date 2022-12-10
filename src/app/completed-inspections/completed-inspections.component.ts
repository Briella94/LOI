import { Component, OnInit } from '@angular/core';
import { IInspection } from '../models/dataModel.model';
import data from '../../assets/db.json';

@Component({
  selector: 'app-completed-inspections',
  templateUrl: './completed-inspections.component.html',
  styleUrls: ['./completed-inspections.component.css']
})

export class CompletedInspectionsComponent implements OnInit {
  Inspections: IInspection[] = data;

  constructor(){  }
  
  displayedColumns: string[] = ['inspectionId', 'inspectionDate', 'inspectionLocation', 'details'];

  ngOnInit(): void {
  }
}
