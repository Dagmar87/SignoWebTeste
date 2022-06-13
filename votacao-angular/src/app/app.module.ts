import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVotacaoComponent } from './components/add-votacao/add-votacao.component';
import { VotacaoDetailsComponent } from './components/votacao-details/votacao-details.component';
import { VotacaoListComponent } from './components/votacao-list/votacao-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVotacaoComponent,
    VotacaoDetailsComponent,
    VotacaoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
