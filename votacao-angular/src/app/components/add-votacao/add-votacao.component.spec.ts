import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVotacaoComponent } from './add-votacao.component';

describe('AddVotacaoComponent', () => {
  let component: AddVotacaoComponent;
  let fixture: ComponentFixture<AddVotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
