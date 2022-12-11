import { Component, OnInit } from '@angular/core';
import { Inspection } from '../models/dataModel.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-completed-inspections',
  templateUrl: './completed-inspections.component.html',
  styleUrls: ['./completed-inspections.component.css']
})

export class CompletedInspectionsComponent implements OnInit {
  public inspectionData: Inspection[] = [];
  public constructor(private inspectionService: DataService) {}

  ngOnInit(): void {
    this.inspectionService
      .getInspections()
      .subscribe((inspections: Inspection[]) => (this.inspectionData = inspections));
  }
  
  displayedColumns: string[] = ['inspectionId', 'inspectionDate', 'inspectionLocation', 'details'];
}