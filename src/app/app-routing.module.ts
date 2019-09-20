import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{  PostComponent} from 'src/app/post/post.component';
import { GetComponent} from 'src/app/get/get.component';
import{GetYearComponent} from 'src/app/get-year/get-year.component';
const routes: Routes = [
 { path:'post', component: PostComponent},
 {path:'get',component:GetComponent},
 {path:'get/year',component:GetYearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
