import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <p>contact works!</p>
    <p>Count: {{ sharedData.count() }}</p>
  `,
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  sharedData = inject(SharedDataService);
}
