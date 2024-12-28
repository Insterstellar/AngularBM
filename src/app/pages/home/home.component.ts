import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedDataService } from '../../services/shared-data.service';
import { Base } from '../../classes/base';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  template: `
  <p-button label="Submit" (onClick)="submit()"></p-button>

  <p>Count: {{ sharedData.count() }}</p>

  <ul>
      @for (item of data; track $index) {
      <li>{{ item.title }}</li>
      <li> <a href="{{ item.url }}">{{ item.url }}</a></li>
      <li><img src="{{ item.thumbnailUrl }}" alt="{{ item.title }}"></li>
  
      }
  </ul>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements Base {
  data: Photo[] = [];

  sharedData = inject(SharedDataService);

  // constructor(private http: HttpClient) {}

  async submit() {
    this.sharedData.count.update(value => value + 1);

    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data: Photo[] = await res.json();
    data.sort((a, b)  => a.title.localeCompare(b.title));
    this.data = data.slice(0, 10);
    //this.printHelloWorld();

  }
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
