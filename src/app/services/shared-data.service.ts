import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  count = signal(0);

  constructor() { }

}
