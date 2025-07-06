import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';  // Adjust path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent],
  template: `
    <app-header></app-header>
    <app-content></app-content>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
