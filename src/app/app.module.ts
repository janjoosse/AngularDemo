import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesDemoComponent } from './src/app/pipes/pipes-demo/pipes-demo.component';
import { TestingDemoComponent } from './src/app/testing/testing-demo/testing-demo.component';
import { DirectivesDemoComponent } from './src/app/directives/directives-demo/directives-demo.component';
import { ObservablesDemoComponent } from './src/app/observables/observables-demo/observables-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesDemoComponent,
    TestingDemoComponent,
    DirectivesDemoComponent,
    ObservablesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
