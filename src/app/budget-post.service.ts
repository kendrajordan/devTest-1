import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Budget } from 'src/app/budget';
@Injectable({
  providedIn: 'root'
})
export class BudgetPostService {
_url = 'https://uat.trc.eku.edu/budgetcodeexam/api';

  constructor(private _http: HttpClient) { }

  addBudget(budget: Budget){
    return this._http.post<any>(`${this._url}/add`, budget);
  }
  getAllBudgetId(){
    return this._http.get<any>(`${this._url}/all`);
  }
  getById(id:number){
    return this._http.get<any>(`${this._url}/id/${id}`);
  }
  getByYear(year:number){
    return this._http.get<any>(`${this._url}/year/${year}`);
  }
  getByCode(code:string){
    return this._http.get<any>(`${this._url}/code/${code}`);
  }
}
