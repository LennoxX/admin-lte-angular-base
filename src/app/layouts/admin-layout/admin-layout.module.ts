import { NgModule } from '@angular/core';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ComponentsModule
  ]
})
export class AdminLayoutModule { }
