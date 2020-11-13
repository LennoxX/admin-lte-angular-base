import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ComponentsModule
  ]
})
export class AdminLayoutModule { }
