import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    ImageModule,
    CardModule,
    DividerModule
  ],
  exports: [
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    ImageModule,
    CardModule,
    DividerModule
  ]
})
export class PrimeNgModule { }
