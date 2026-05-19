import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageControlComponent } from './supercop/image-control/image-control.component';



@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, RouterOutlet, ImageControlComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'SUPERCOP';

}

export class Person{

  constructor(
    public name: string,
    private address: string = 'No address'
  ){}
}


