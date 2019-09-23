import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
import { BudgetPostService } from 'src/app/budget-post.service';
@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css']
})
export class GetIdComponent implements OnInit {
  budgetsList:Budget[];
  details = [];
  id:number;
  msg:string;
  results:string;
  constructor(private _budgetPostService: BudgetPostService) { }

  ngOnInit() {
  }
  getBudgetInfo(){

    this._budgetPostService.getById(this.id)
    .subscribe(
      data =>{
        this.details = [];
        this.results = data.results;
        this.msg = data.message;
        var data = data.data;
        this.details.push(data);
      },
      error =>{
        this.msg = error;
        this.results = 'Error!';
       
      }
    )
    
  }
}
