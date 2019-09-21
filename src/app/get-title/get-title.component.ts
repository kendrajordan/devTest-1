import { Component, OnInit } from '@angular/core';
import{ Budget } from 'src/app/budget';
import { BudgetPostService } from 'src/app/budget-post.service';
@Component({
  selector: 'app-get-title',
  templateUrl: './get-title.component.html',
  styleUrls: ['./get-title.component.css']
})
export class GetTitleComponent implements OnInit {
  budgetsList:Budget[];
  budgetTitles = [];
  codes = [];
  msg = "Click the Budget Titles to See the Related Budget Information"
  constructor(private _budgetPostService: BudgetPostService) { }

  ngOnInit() {
this.getAllBudgetTitles();
  }
  getAllBudgetTitles(){
    this._budgetPostService.getAllBudgetId()
    .subscribe(
      data =>{
       var data= data.data;
        var titles = [];
       for(let element in data){
        titles.push(data[element].budgetTitle);
       }
       const distinct =(value, index, self) =>{
         return self.indexOf(value) === index;
       }
      var titles= titles.filter(distinct);
     

         for(let index in titles){
            this.budgetTitles[titles[index]] = [];
          }
          for(let index in titles){
            for(let element in data){
              if(titles[index] == data[element].budgetTitle){
                this.budgetTitles[titles[index]].push(data[element].budgetCode);
              }
            }
          }
        
      } 
    )
  }
  getByNgame(codes:any){
    this.codes = [];
    for(let elem in codes){
      this._budgetPostService.getByCode(codes[elem])
      .subscribe(
        data =>{
          var data= data.data;
          data = data[0];
          this.msg = data.budgetTitle;
          this.codes.push(data);
        }
      )
    }
  }
}
