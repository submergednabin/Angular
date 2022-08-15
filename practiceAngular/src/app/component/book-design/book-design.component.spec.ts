import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDesignComponent } from './book-design.component';

describe('BookDesignComponent', () => {
  let component: BookDesignComponent;
  let fixture: ComponentFixture<BookDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
