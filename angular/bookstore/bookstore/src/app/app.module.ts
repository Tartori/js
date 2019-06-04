import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailViewComponent } from './catalog-detail-view/catalog-detail-view.component';
import { BookTableComponent } from './book-table/book-table.component';
import { CatalogService } from './services/CatalogService';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderService } from './services/OrderService';
import { CatalogSummaryComponent } from './catalog-summary/catalog-summary.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'catalog-summary', component: CatalogSummaryComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogDetailViewComponent,
    BookTableComponent,
    HomeComponent,
    CustomerDetailsComponent,
    CatalogSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [CatalogService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
