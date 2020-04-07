import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: MiscellaneousComponent,
    children: [
      {
        path: "",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule {}
