import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { GetProductByCategoryComponent } from './get-product-by-category/get-product-by-category.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {RouterModule, Routes} from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from './services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SuccessfulDialogComponent } from './successful-dialog/successful-dialog.component';
import { UnSuccessfulDialogComponent } from './un-successful-dialog/un-successful-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard} from './can-activate-guard';

import { Ng2OrderModule } from 'ng2-order-pipe';

const routes: Routes=[
  {
    path:'login',//path is http:localhost:4200/login
    component:LoginPageComponent
  },
  {
    path:'dashboard',
    component: GetAllProductsComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'productByCategory',//path is http:localhost:4200/productByCategory
    component:GetProductByCategoryComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'getAllProducts',//path is http:localhost:4200/getAllProducts
    component:GetAllProductsComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'add',//path is http:localhost:4200/add
    component:AddProductComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'update',//path is http:localhost:4200/update
    component:UpdateProductComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    //by default we are opening login
        path:'',
        redirectTo:'login',
        pathMatch:'full'
  }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    GetProductByCategoryComponent,
    GetAllProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    MainNavComponent,
    SuccessfulDialogComponent,
    UnSuccessfulDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    Ng2OrderModule
  ],
  providers: [ProductService,AuthenticationServiceService,AuthenticationServiceService,RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
