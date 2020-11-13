import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
