import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ToolbarModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBM';
}
