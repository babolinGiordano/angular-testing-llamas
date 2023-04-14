import { Injectable } from '@angular/core';
import { Llama } from './llama.model';

@Injectable()
export class FrontService {
  getFeaturedLlamas(): Llama[] {
    return [
      { name: 'Richard', imageFileName: '1.jpg' },
      { name: 'Bonnie', imageFileName: '2.jpg' }
    ];
  }
}
