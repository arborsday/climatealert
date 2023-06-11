import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TakeActionComponent } from './take-action/take-action.component';

const routes: Routes = [
  { path: 'take-action', component: TakeActionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash:true,
      // onSameUrlNavigation: "reload",
      // scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
