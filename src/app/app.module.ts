import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PokemonService } from './pokemon.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { UiModule } from './ui/ui.module';
import { PokemonComponent } from './pokemon/pokemon.component'; 
import { PokemonLoadingComponent } from './pokemon-loading/pokemon-loading.component';
import { JwPaginationModule } from 'jw-angular-pagination';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonLoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    RouterModule.forRoot(routes),
    FormsModule,
    JwPaginationModule
  ],
  providers: [PokemonService,  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
