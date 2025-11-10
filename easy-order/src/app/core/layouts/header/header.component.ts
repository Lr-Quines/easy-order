import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'eo-header',
  standalone: true,
  imports: [
    ButtonModule,
    BreadcrumbModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  protected readonly SIDEBAR_STATE_SERVICE = inject(SidebarStateService);

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.home = { icon: 'pi pi-home' };
  }

}
