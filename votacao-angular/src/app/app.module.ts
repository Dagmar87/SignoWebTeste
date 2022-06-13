import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
