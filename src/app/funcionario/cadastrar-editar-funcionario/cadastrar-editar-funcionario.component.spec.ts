import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarFuncionarioComponent } from './cadastrar-editar-funcionario.component';

describe('CadastrarEditarFuncionarioComponent', () => {
  let component: CadastrarEditarFuncionarioComponent;
  let fixture: ComponentFixture<CadastrarEditarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEditarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
