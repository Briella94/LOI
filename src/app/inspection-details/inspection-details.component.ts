import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})

export class InspectionDetailsComponent implements OnInit {
  public inspectionData: any;
  providedId: number = 0;
  public constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const url: string = 'https://my-json-server.typicode.com/Briella94/LOI/db';
    this.http.get(url).subscribe((response) => {
      this.inspectionData = response;
    })

    this.route.queryParams
      .subscribe(params => {
        this.providedId = params['clickedId'];
        console.log(this.providedId);
      })
  }

  displayedColumns: string[] = ['detailsKeys', 'detailsValues'];
}
