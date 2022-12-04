import { Component, OnInit } from '@angular/core';
import { default as dataSource } from "../data.json";

@Component({
  selector: 'app-completed-inspections',
  templateUrl: './completed-inspections.component.html',
  styleUrls: ['./completed-inspections.component.css']
})

export class CompletedInspectionsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
