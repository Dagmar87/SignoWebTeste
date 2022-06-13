import { Votacao } from './../../models/votacao.model';
import { Component, OnInit } from '@angular/core';
import { VotacaoService } from 'src/app/services/votacao.service';

@Component({
  selector: 'app-add-votacao',
  templateUrl: './add-votacao.component.html',
  styleUrls: ['./add-votacao.component.css'],
})
export class AddVotacaoComponent implements OnInit {
  votacao: Votacao = {
    titulo: '',
    opcaoU: '',
    opcaoD: '',
    opcaoT: '',
    situacao: false,
    dataInicio: new Date(),
    dataFim: new Date(),
  };

  submitted = false;

  constructor(private votacaoService: VotacaoService) {}

  ngOnInit(): void {}

  saveVotacao(): void {
    const data = {
      titulo: this.votacao.titulo,
      opcaoU: this.votacao.opcaoU,
      opcaoD: this.votacao.opcaoD,
      opcaoT: this.votacao.opcaoT,
      dataInicio: this.votacao.dataInicio,
      dataFim: this.votacao.dataFim,
    };
    this.votacaoService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newVotacao(): void {
    this.submitted = false;
    this.votacao = {
      titulo: '',
      opcaoU: '',
      opcaoD: '',
      opcaoT: '',
      situacao: false,
      dataInicio: new Date(),
      dataFim: new Date(),
    };
  }
}
