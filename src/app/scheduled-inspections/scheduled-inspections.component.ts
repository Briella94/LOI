import { Component, OnInit } from '@angular/core';
import { Inspection } from '../models/dataModel.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-scheduled-inspections',
  templateUrl: './scheduled-inspections.component.html',
  styleUrls: ['./scheduled-inspections.component.css']
})

export class ScheduledInspectionsComponent implements OnInit {
  public inspectionData: Inspection[] = [];
  public constructor(private inspectionService: DataService) {}

  ngOnInit(): void {
    this.inspectionService
      .getInspections()
      .subscribe((inspections: Inspection[]) => (this.inspectionData = inspections));
  }
  
  displayedColumns: string[] = ['inspectionId', 'inspectionDate', 'inspectionLocation', 'details'];
}