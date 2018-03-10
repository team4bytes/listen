import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpeechRecognitionService } from './services/speech-recognition.service';
import { ListenComponent } from './listen/listen.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { SpeechProcessingComponent } from './speech-processing/speech-processing.component';
import { SpeechProcessingService } from './services/speech-processing.service';

@NgModule({
  declarations: [
    AppComponent,
    ListenComponent,
    ProductsComponent,
    SpeechProcessingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientModule
  ],
  providers: [SpeechRecognitionService, ProductService, MessageService, SpeechProcessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
