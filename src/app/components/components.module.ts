import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BaseListComponent } from './base-list/base-list.component';


@NgModule({
  declarations: [NavComponent, MenuComponent, FooterComponent, BaseListComponent],
  imports: [
    RouterModule,
  ],
  exports: [
    NavComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
