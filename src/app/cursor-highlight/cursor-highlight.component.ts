// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cursor-highlight',
//   standalone: true,
//   imports: [],
//   templateUrl: './cursor-highlight.component.html',
//   styleUrl: './cursor-highlight.component.scss'
// })
// export class CursorHighlightComponent {

// }



import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-highlight',
  standalone: true,
  imports: [],
  templateUrl: './cursor-highlight.component.html',
  styleUrls: ['./cursor-highlight.component.css']
})
export class CursorHighlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initiale Setup, falls notwendig
  }

  // Listener für die Mausbewegung
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const cursorHighlight = document.getElementById('cursor-highlight');
    if (cursorHighlight) {
      cursorHighlight.style.left = `${event.pageX}px`;
      cursorHighlight.style.top = `${event.pageY}px`;
    }
  }
}
