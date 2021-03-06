import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    DivisionsComponent,
    DashboardComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
