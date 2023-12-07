import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './showproduct/showproduct.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';


const ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'showproduct/:id',component:ShowProductComponent},
  {path:'add',component:AddProductComponent},
  {path:'product',component:ProductComponent},
  {path:'**',component:NotfoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ]
  ,exports:[RouterModule]

})
export class AppRoutingModule { }
