import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    this.translate.stream('ANY_KEY').subscribe(() => {
      const build = () => setTimeout(() => this.buildOrRebuild(), 0);
      try {
        (document as any).fonts?.ready.then(build).catch(() => build());
      } catch {
        build();
      }
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
    const wrapperEl = bandEl.parentElement as HTMLElement | null;
    if (!wrapperEl) return;

    if (!this.originalHTML && bandEl.innerHTML.trim().length > 0) {
      this.originalHTML = bandEl.innerHTML.trim();
    }

    if (!this.originalHTML) {
      setTimeout(() => this.buildOrRebuild(), 100);
      return;
    }

    this.cleanupStyle();
    bandEl.style.animation = '';
    bandEl.innerHTML = this.originalHTML;

    let w1 = bandEl.scrollWidth;
    if (w1 <= 0) {
      setTimeout(() => this.buildOrRebuild(), 50);
      return;
    }

    bandEl.innerHTML = this.originalHTML + this.originalHTML;
    let w2 = bandEl.scrollWidth;

    const period = w2 - w1;
    if (period <= 0) {
      setTimeout(() => this.buildOrRebuild(), 50);
      return;
    }

    const neededMin = wrapperEl.offsetWidth + period;
    while (bandEl.scrollWidth < neededMin) {
      bandEl.innerHTML += this.originalHTML;
      if (bandEl.innerHTML.length > 500_000) break;
    }

    const durationSec = period / this.speedPxPerSec;

    this.keyframesName = `bandScroll_${Date.now()}`;
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = `
      @keyframes ${this.keyframesName} {
        from { transform: translate3d(0, 0, 0); }
        to   { transform: translate3d(-${period}px, 0, 0); }
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
