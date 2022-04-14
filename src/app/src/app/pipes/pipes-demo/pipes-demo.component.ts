import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  myVariable = 0.12313121212;
  myVariable2 = 'just some text';
  myVariable3?: string | null;

  constructor(private percentPipe: PercentPipe) { }

  ngOnInit(): void {
    this.myVariable3 = this.percentPipe.transform(this.myVariable);
  }

}
