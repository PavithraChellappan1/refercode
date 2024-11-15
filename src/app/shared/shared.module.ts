import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    // SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
