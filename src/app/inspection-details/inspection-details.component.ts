import { Component, OnInit } from '@angular/core';
import { Inspection } from '../models/dataModel.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})

export class InspectionDetailsComponent implements OnInit {
  providedId: number = 0;
  public inspectionData: Inspection[] = [];
  public constructor(private inspectionService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.inspectionService
      .getInspections()
      .subscribe((inspections: Inspection[]) => (this.inspectionData = inspections));

    this.route.queryParams
    .subscribe(params => {
      let clickedId = params['clickedId'];
      this.providedId = clickedId;
    })
  };
}
