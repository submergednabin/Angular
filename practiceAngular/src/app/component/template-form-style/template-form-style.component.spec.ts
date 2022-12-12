import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormStyleComponent } from './template-form-style.component';

describe('TemplateFormStyleComponent', () => {
  let component: TemplateFormStyleComponent;
  let fixture: ComponentFixture<TemplateFormStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
