import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "./app-routing.module";

import { CustomTemplateComponent } from "./shared/custom-pagination/custom-template.component";
import { ServerExampleComponent } from './server-example/server-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPaginationModule, AppRoutingModule],
  declarations: [AppComponent, CustomTemplateComponent, ServerExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
