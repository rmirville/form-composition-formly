import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTestComponent,
  },
  {
    path: 'edit',
    component: EditTestComponent,
  },
  {
    path: '',
    component: ViewTestsComponent,
  }
]

@NgModule({
  declarations: [
    CreateTestComponent,
    EditTestComponent,
    ViewTestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestsModule { }
