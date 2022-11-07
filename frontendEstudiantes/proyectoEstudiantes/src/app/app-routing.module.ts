import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { StudendDetailComponent } from './features/studend-detail/studend-detail.component';
import { StudentsComponent } from './features/students/students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: StudendDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
