import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
  
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-band',
  standalone: true,
  imports: [CommonModule, TranslateModule], 
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss'],
})
export class BandComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bandRef', { static: true }) bandRef!: ElementRef<HTMLDivElement>;

  private styleEl: HTMLStyleElement | null = null;
  private keyframesName = '';
  private originalHTML = '';
  private built = false;


  private readonly speedPxPerSec = 120;

  ngAfterViewInit(): void {
  
    requestAnimationFrame(() => {
      setTimeout(() => this.buildOrRebuild(), 0);
    });
  }

  @HostListener('window:resize')
  onResize(): void {
 
    this.buildOrRebuild();
  }

  ngOnDestroy(): void {
    this.cleanupStyle();
  }

  private buildOrRebuild(): void {
    const bandEl = this.bandRef.nativeElement;
    const wrapperEl = bandEl.parentElement as HTMLElement | null; // .marquee
    if (!wrapperEl) return;


    if (!this.originalHTML) {
      this.originalHTML = bandEl.innerHTML.trim();
    }

    
    this.cleanupStyle();
    bandEl.style.animation = '';
    bandEl.innerHTML = this.originalHTML;

  
    const minWidth = wrapperEl.offsetWidth * 2;
    while (bandEl.scrollWidth < minWidth) {
      bandEl.innerHTML += this.originalHTML;
     
      if (bandEl.innerHTML.length > 500000) break;
    }

    
    const halfWidth = bandEl.scrollWidth / 2;

   
    if (halfWidth <= 0) {
      setTimeout(() => this.buildOrRebuild(), 50);
      return;
    }

 
    const durationSec = halfWidth / this.speedPxPerSec;


    this.keyframesName = `bandScroll_${Date.now()}`;

  
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = `
      @keyframes ${this.keyframesName} {
        from { transform: translateX(0); }
        to   { transform: translateX(-${halfWidth}px); }
      }
    `;
    document.head.appendChild(this.styleEl);

    
    bandEl.style.animation = `${this.keyframesName} ${durationSec}s linear infinite`;

    this.built = true;
  }

  private cleanupStyle(): void {
    if (this.styleEl && this.styleEl.parentNode) {
      this.styleEl.parentNode.removeChild(this.styleEl);
    }
    this.styleEl = null;
  }

pauseMarquee(): void {
  if (this.built) {
    this.bandRef.nativeElement.style.animationPlayState = 'paused';
  }
}

resumeMarquee(): void {
  if (this.built) {
    this.bandRef.nativeElement.style.animationPlayState = 'running';
  }
}



}
