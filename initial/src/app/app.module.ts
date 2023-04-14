import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { FrontService } from './front/front.service';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FrontComponent
  ],
  providers: [FrontService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
