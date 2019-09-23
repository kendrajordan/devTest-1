import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
import { BudgetPostService } from 'src/app/budget-post.service';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  budgetsList:Budget[];
   // Pagination parameters.
   p: Number = 1;
   count: Number = 6;
  constructor(private _budgetPostService: BudgetPostService) { }

  ngOnInit() {
    this.getAllBudget();
  }
  getAllBudget(){
    this._budgetPostService.getAllBudgetId()
    .subscribe(
      data =>{
       this.budgetsList = data.data;
     
      } 
    )
  }


}
