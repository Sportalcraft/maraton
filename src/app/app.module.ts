import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatService } from './service/chat.service';

import { AppComponent } from './app.component';
import { CustomTextComponent } from './custom-text/custom-text.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
