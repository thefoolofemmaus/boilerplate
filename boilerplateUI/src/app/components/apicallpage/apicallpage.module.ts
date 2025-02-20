import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicallpageComponent } from './apicallpage.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ApicallpageComponent}
]

@NgModule({
  declarations: [
    ApicallpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ApicallpageComponent
  ]
})
export class ApicallpageModule { }
