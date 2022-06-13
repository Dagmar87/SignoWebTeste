import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacaoDetailsComponent } from './votacao-details.component';

describe('VotacaoDetailsComponent', () => {
  let component: VotacaoDetailsComponent;
  let fixture: ComponentFixture<VotacaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotacaoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
