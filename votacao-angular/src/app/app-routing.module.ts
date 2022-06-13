import { AddVotacaoComponent } from './components/add-votacao/add-votacao.component';
import { VotacaoDetailsComponent } from './components/votacao-details/votacao-details.component';
import { VotacaoListComponent } from './components/votacao-list/votacao-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'votacaos', pathMatch: 'full' },
  { path: 'votacaos', component: VotacaoListComponent },
  { path: 'votacaos/:id', component: VotacaoDetailsComponent },
  { path: 'add', component: AddVotacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
