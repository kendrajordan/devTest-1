import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSortModule, MatInputModule, MatDialog, MatDialogModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatStepperModule, MatRadioModule, MatTreeModule, MatBottomSheet, MatBottomSheetModule, MatProgressBarModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { HttpClientModule} from '@angular/common/http';
import { BudgetPostService } from 'src/app/budget-post.service';
import { GetYearComponent } from './get-year/get-year.component';
import { GetTitleComponent } from './get-title/get-title.component';
import { GetIdComponent } from './get-id/get-id.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GetComponent,
    GetYearComponent,
    GetTitleComponent,
    GetIdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [BudgetPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
