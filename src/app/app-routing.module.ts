import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AppComponent } from "./app.component";
import { ServerExampleComponent } from "./server-example/server-example.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "sp",
    component: ServerExampleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {}
