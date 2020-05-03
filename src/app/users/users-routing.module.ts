import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent, UserDetailComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-list'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserDetailComponent
  },
  {
    path: ':userId',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
