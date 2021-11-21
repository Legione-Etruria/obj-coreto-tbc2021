import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZEBComponent } from './ZEB/ZEB.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [AppComponent, ZEBComponent, HomeComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent],
})
export class AppModule {}
