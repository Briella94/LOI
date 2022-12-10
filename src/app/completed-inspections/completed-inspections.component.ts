import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-inspections',
  templateUrl: './completed-inspections.component.html',
  styleUrls: ['./completed-inspections.component.css']
})

export class CompletedInspectionsComponent implements OnInit {
  public inspectionData: any;
  public constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url: string = 'https://my-json-server.typicode.com/Briella94/LOI/db';
    this.http.get(url).subscribe((response) => {
      this.inspectionData = response;
    })
  }
  displayedColumns: string[] = ['inspectionId', 'inspectionDate', 'inspectionLocation', 'details'];

}
