import{FormsModule} from '@angular/forms';
import { PostComponent } from './post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      PostComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      
    ],
    providers: [],
    bootstrap: [PostComponent]
  })
  export class PostModule{}