import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { SearchComponent } from '../../../../shared/components/search/search.component';



@Component({
  selector: 'home',
  standalone: true,
  imports: [
    Button,
    CardModule,
    SearchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
