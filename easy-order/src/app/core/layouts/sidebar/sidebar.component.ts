import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'eo-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  protected readonly SIDEBAR_STATE_SERVICE = inject(SidebarStateService);

}
