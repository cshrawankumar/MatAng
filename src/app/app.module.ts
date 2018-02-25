import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For Material Animations Support
import { BrowserModule } from '@angular/platform-browser'; //For Browser Support
import { NgModule } from '@angular/core'; //For Angular Module
//import { MatButtonModule } from '@angular/material'; // For Material Button
//import {MatInputModule} from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    //MatButtonModule, MatInputModule, MatFormFieldModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
