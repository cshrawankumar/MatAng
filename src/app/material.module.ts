import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatProgressSpinnerModule, MatCardModule  } from '@angular/material'; // For Material Button
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule ],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule ],
})
export class MaterialModule { }