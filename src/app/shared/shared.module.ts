import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  exports: [],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedModule { }
