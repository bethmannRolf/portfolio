import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-cursor-highlight',
  templateUrl: './cursor-highlight.component.html',
  styleUrls: ['./cursor-highlight.component.css']
})
export class CursorHighlightComponent implements OnInit {

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private cursorHighlight!: HTMLElement;

  ngOnInit(): void {
    this.cursorHighlight = document.getElementById('cursor-highlight') as HTMLElement;
    this.animate();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {

    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  private animate(): void {
    this.currentX += (this.targetX - this.currentX) * 0.1;
    this.currentY += (this.targetY - this.currentY) * 0.1;
    if (this.cursorHighlight) {
      this.cursorHighlight.style.left = `${this.currentX}px`;
      this.cursorHighlight.style.top = `${this.currentY}px`;
    }
    requestAnimationFrame(() => this.animate());
  }
}
