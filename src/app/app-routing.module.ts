import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tests',
    loadChildren: () => import('../modules/tests/tests.module').then(m => m.TestsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tests',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
