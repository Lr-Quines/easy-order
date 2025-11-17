import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { SearchComponent } from './shared/components/search/search.component';

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
export class AppComponent implements OnInit {

  // #region VARIABLES
  private readonly _PRIME_NG_CONFIG = inject(PrimeNGConfig);
  // #endregion VARIABLES

  // #region LIFE CYCLE
  ngOnInit(): void {
    this.setTranslationPrimeNG();
  }
  // #endregion LIFE CYCLE

  // #region UTILS
  private setTranslationPrimeNG(): void {
    this._PRIME_NG_CONFIG.setTranslation({
      passwordPrompt: 'Digite uma senha',
      weak: 'Muito simples',
      medium: 'Complexidade média',
      strong: 'Senha complexa'
    });
  }
  // #endregion UTILS

}
