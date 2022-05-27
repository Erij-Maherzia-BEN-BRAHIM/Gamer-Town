import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionClientComponent } from './connexion-client.component';

describe('ConnexionClientComponent', () => {
  let component: ConnexionClientComponent;
  let fixture: ComponentFixture<ConnexionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
