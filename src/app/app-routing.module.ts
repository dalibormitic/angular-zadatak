import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'listview', component: ListViewComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
