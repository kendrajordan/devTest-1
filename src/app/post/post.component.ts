import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
import { BudgetPostService } from 'src/app/budget-post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  budgetModel = new Budget( null, null, "", "");
  budgetsList:Budget[];
  ifSuccess = false;
  latest = new Budget( null, null, "", "");
  msg = "";
  constructor(private _budgetPostService: BudgetPostService){ }
  
  ngOnInit() {
//this.getAllBudget();
this.getNewId();
  }
 //Api call for  Budgets
getAllBudget(){
  this._budgetPostService.getAllBudgetId()
  .subscribe(
    data =>{
     this.budgetsList = data.data;
   
    } 
  )
}
getNewId(){
  this._budgetPostService.getAllBudgetId()
  .subscribe(
    data =>{
    var data = data.data;
    var currentId = data[data.length - 1].budgetCodeId;
    var newId = currentId + 1;
    this.budgetModel.budgetCodeId = newId;
    
    } 
  )
}
onClick(){
  this.latest = this.budgetModel;
  this.ifSuccess = true;
  this.msg = "It works!";

  this.getNewId();
    this.budgetModel.budgetCode = "";
    this.budgetModel.fiscalYear = null;
    this.budgetModel.budgetTitle = "";
}
  onSubmit(){
    this._budgetPostService.addBudget(this.budgetModel)
    .subscribe(
      data => {
        this.ifSuccess = true;
        var data = data.data;
        this.latest = data;
        this.msg = "<b>"+data.message+"!</b>";
      },
      error => {
        this.msg = "<b>"+error.message+"!</b>";
      }
        
    )
    this.getNewId();
    this.budgetModel.budgetCode = "";
    this.budgetModel.fiscalYear = null;
    this.budgetModel.budgetTitle = "";
  }
 
}
