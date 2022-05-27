import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClientFormComponent } from './account-client-form.component';

describe('AccountClientFormComponent', () => {
  let component: AccountClientFormComponent;
  let fixture: ComponentFixture<AccountClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountClientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
