import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
import { BudgetPostService } from 'src/app/budget-post.service';
import { from } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  budgetModel = new Budget( null, null, "", "");
  budgetsList:Budget[];
  latest = new Budget( null, null, "", "");
  msg = "";
  result = "";
  
  constructor(private _budgetPostService: BudgetPostService){ }
  
  ngOnInit() {

  }



/*onClick(){
  this.latest = this.budgetModel;
  this.msg = "It works!";
  this.budgetModel = new Budget( null, null, "", "");
}*/
  onSubmit(){
    this._budgetPostService.addBudget(this.budgetModel)
    .subscribe(
      data => {
        this.msg = data.message;
        var data = data.data;
        this.latest = data;
        
      },
      error => {
        this.msg = error;
      }
        
    )
   
    this.budgetModel = new Budget( null, null, "", "");
  }
 
}
