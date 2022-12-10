import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})

export class InspectionDetailsComponent implements OnInit {
  public inspectionData: any;
  public constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url: string = 'https://my-json-server.typicode.com/Briella94/LOI/db';
    this.http.get(url).subscribe((response) => {
      this.inspectionData = response;
    })
  }

  displayedColumns: string[] = ['detailsKeys', 'detailsValues'];
}
