import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailViewComponent } from './catalog-detail-view/catalog-detail-view.component';
import { BookTableComponent } from './book-table/book-table.component';
import { CatalogService } from './services/CatalogService';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogDetailViewComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
