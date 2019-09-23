import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{  PostComponent} from 'src/app/post/post.component';
import { GetComponent} from 'src/app/get/get.component';
import{GetYearComponent} from 'src/app/get-year/get-year.component';
import{GetTitleComponent} from 'src/app/get-title/get-title.component';
import{GetIdComponent} from 'src/app/get-id/get-id.component';
const routes: Routes = [
 { path:'post', component: PostComponent},
 {path:'get',component:GetComponent},
 {path:'get/year',component:GetYearComponent},
 {path:'get/title',component:GetTitleComponent},
 {path:'get/id',component:GetIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[PostComponent,GetComponent,GetYearComponent,GetTitleComponent,GetIdComponent];