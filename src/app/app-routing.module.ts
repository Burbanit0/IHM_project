import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component'
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'orders', component:  OrderListComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
