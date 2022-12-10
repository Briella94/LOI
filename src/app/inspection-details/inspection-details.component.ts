import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})

export class InspectionDetailsComponent implements OnInit {
  public providedId: number = 0;
  public inspectionData: any;
  public constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const url: string = 'https://my-json-server.typicode.com/Briella94/LOI/db';
    this.http.get(url).subscribe((response) => {
      this.inspectionData = response;
    })

    this.route.queryParams
    .subscribe(params => {
      let clickedId = params['clickedId'];
      this.providedId = clickedId;
      console.log(clickedId);
    })
  };

}
