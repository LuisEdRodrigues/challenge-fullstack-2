import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVendedorComponent } from './register-vendedor.component';

describe('RegisterVendedorComponent', () => {
  let component: RegisterVendedorComponent;
  let fixture: ComponentFixture<RegisterVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVendedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
