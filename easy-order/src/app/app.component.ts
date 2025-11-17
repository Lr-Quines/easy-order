import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../app/features/search/search.component'

@Component({
  selector: 'eo-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SearchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
