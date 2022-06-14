import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Votacao } from 'src/app/models/votacao.model';
import { VotacaoService } from 'src/app/services/votacao.service';

@Component({
  selector: 'app-votacao-details',
  templateUrl: './votacao-details.component.html',
  styleUrls: ['./votacao-details.component.css'],
})
export class VotacaoDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentVotacao: Votacao = {
    titulo: '',
    opcaoU: '',
    opcaoD: '',
    opcaoT: '',
    situacao: false,
    dataInicio: new Date(),
    dataFim: new Date(),
  };

  message = '';

  constructor(
    private votacaoService: VotacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode){
      this.message = '';
      this.getVotacao(this.route.snapshot.params["id"]);
    }
  }

  getVotacao(id: string): void {
    this.votacaoService.get(id).subscribe({
      next: (data) => {
        this.currentVotacao = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateSituacao(status: boolean): void {
    const data = {
      titulo: this.currentVotacao.titulo,
      opcaoU: this.currentVotacao.opcaoU,
      opcaoD: this.currentVotacao.opcaoD,
      opcaoT: this.currentVotacao.opcaoT,
      situacao: status,
      dataInicio: this.currentVotacao.dataInicio,
      dataFim: this.currentVotacao.dataFim,
    };
    this.message = '';
    this.votacaoService.update(this.currentVotacao.id, data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.currentVotacao.situacao = status;
        this.message = res.message ? res.message : 'O status foi atualizado com sucesso!';
      },
      error: (e) => console.error(e)
    });
  }

  updateVotacao(): void {
    this.message = '';
    this.votacaoService.update(this.currentVotacao.id, this.currentVotacao)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Esta enquente foi atualizada com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteVotacao(): void {
    this.votacaoService.delete(this.currentVotacao.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/votacaos']);
        },
        error: (e) => console.error(e)
      });
  }
}
