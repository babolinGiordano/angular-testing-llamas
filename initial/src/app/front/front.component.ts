import { Component, OnInit } from '@angular/core';
import { Llama } from './llama.model';
import { FrontService } from './front.service';

@Component({
  selector: 'ld-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  llamas: Llama[];

  constructor(private frontService: FrontService) {}

  ngOnInit(): void {
    this.llamas = this.frontService.getFeaturedLlamas();
  }

  isListVisible(): boolean {
    return this.llamas.length > 0;
  }
}
