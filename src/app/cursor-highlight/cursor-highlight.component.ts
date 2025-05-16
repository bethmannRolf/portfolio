


import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-cursor-highlight',
    imports: [],
    templateUrl: './cursor-highlight.component.html',
    styleUrls: ['./cursor-highlight.component.css']
})
export class CursorHighlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

 
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const cursorHighlight = document.getElementById('cursor-highlight');
    if (cursorHighlight) {
      cursorHighlight.style.left = `${event.pageX}px`;
      cursorHighlight.style.top = `${event.pageY}px`;
    }
  }
}
