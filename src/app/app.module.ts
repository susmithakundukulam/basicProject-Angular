import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServertestComponent } from './servertest/servertest.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './parent1/child1/child1.component';
import { Child2Component } from './parent1/child2/child2.component';
import { Parent11Component } from './parent11/parent11.component';
import { Child11Component } from './parent11/child11/child11.component';
import { Child22Component } from './parent11/child22/child22.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServertestComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent11Component,
    Child11Component,
    Child22Component,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
