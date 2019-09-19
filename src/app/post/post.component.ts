import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  budgetModel = new Budget( 39, null, "8-000022", "Developer Budget");
  constructor() { }

  ngOnInit() {

  }
 
}
