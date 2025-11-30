import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenteInfoComponent } from './paymente-info.component';

describe('PaymenteInfoComponent', () => {
  let component: PaymenteInfoComponent;
  let fixture: ComponentFixture<PaymenteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymenteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymenteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
