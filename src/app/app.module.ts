import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { PaneComponent } from './container/pane/pane.component';
import { UnitComponent } from './container/pane/unit.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PaneComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
