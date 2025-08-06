import { Component, OnInit, HostListener } from '@angular/core';

/**
 * A component that visually highlights the mouse cursor's position
 * by moving an element with the ID `cursor-highlight` according to mouse movements.
 */
@Component({
  selector: 'app-cursor-highlight',
  imports: [],
  templateUrl: './cursor-highlight.component.html',
  styleUrls: ['./cursor-highlight.component.css']
})
export class CursorHighlightComponent implements OnInit {

  /**
   * Initializes the component.
   * Currently does not perform any logic.
   */
  constructor() {}

  /**
   * Angular lifecycle hook that is called after component initialization.
   * Currently not used, but can be used for setup logic.
   */
  ngOnInit(): void {}

  /**
   * Listens to mouse movements on the document and moves the element
   * with ID `cursor-highlight` to follow the cursor.
   *
   * @param event The mouse event containing the current cursor position.
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const cursorHighlight = document.getElementById('cursor-highlight');
    if (cursorHighlight) {
      cursorHighlight.style.left = `${event.pageX}px`;
      cursorHighlight.style.top = `${event.pageY}px`;
    }
  }
}