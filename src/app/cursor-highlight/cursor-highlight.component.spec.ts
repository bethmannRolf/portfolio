import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorHighlightComponent } from './cursor-highlight.component';

describe('CursorHighlightComponent', () => {
  let component: CursorHighlightComponent;
  let fixture: ComponentFixture<CursorHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursorHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
