import { Component } from '@angular/core';
import { SecondoComponent} from './secondo/secondo.component';

@Component({
  selector: 'app-root',
  imports: [SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loayza-james-fila-a';
  name = 'app'
}
