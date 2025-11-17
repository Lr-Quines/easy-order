import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'search',
  standalone: true,
  imports: [
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}


