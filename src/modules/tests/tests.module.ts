import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTestComponent,
  },
  {
    path: 'edit',
    component: EditTestComponent
  }
]

@NgModule({
  declarations: [
    CreateTestComponent,
    EditTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestsModule { }
