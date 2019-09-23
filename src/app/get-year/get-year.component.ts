import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
import { BudgetPostService } from 'src/app/budget-post.service';
@Component({
  selector: 'app-get-year',
  templateUrl: './get-year.component.html',
  styleUrls: ['./get-year.component.css']
})
export class GetYearComponent implements OnInit {
  budgetsList:Budget[];
  budgetYears = [];
  currentYear:any ="Select a Year to View Budgets";
  constructor(private _budgetPostService: BudgetPostService) { }

  ngOnInit() {
    this.getAllBudgetYears();
  }
  getAllBudgetYears(){
    this._budgetPostService.getAllBudgetId()
    .subscribe(
      data =>{
       var data= data.data;
        var years = [];
       for(let element in data){
        years.push(data[element].fiscalYear);
       }
       const distinct =(value,index,self) =>{
        return self.indexOf(value) === index;
      }
     years = years.filter(distinct);
     years = years.sort(function(a,b){return a - b});
     this.budgetYears = years;
      } 
    )
  }
  getByYear(year:number){
      
    this._budgetPostService.getByYear(year)
      .subscribe(
        data =>{
          var data= data.data;
          this.budgetsList = data;
          this.currentYear = year;
        }
      )
  }
}
