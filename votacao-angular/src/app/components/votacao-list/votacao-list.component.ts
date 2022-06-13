import { Votacao } from './../../models/votacao.model';
import { Component, OnInit } from '@angular/core';
import { VotacaoService } from 'src/app/services/votacao.service';

@Component({
  selector: 'app-votacao-list',
  templateUrl: './votacao-list.component.html',
  styleUrls: ['./votacao-list.component.css']
})
export class VotacaoListComponent implements OnInit {

  votacaos?: Votacao[];
  currentVotacao: Votacao = {};
  currentIndex = -1;

  constructor(private votacaoService: VotacaoService) { }

  ngOnInit(): void {
    this.retrieveVotacaos();
  }

  retrieveVotacaos(): void {
    this.votacaoService.getAll()
      .subscribe({
        next: (data) => {
          this.votacaos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveVotacaos();
    this.currentVotacao = {};
    this.currentIndex = -1;
  }

  setActiveVotacao(votacao: Votacao, index: number): void {
    this.currentVotacao = votacao;
    this.currentIndex = index;
  }

  removeAllVotacaos(): void {
    this.votacaoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
