import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'crear', component: FormComponent },
  { path: 'editar/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
