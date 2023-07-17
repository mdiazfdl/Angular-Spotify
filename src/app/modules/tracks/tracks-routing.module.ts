import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

/* The `const routes: Routes` variable is an array of route objects. Each route object represents a
route in the application. In this case, there is only one route defined. */
const routes: Routes = [
  {
    path:'',
    component: TracksPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
