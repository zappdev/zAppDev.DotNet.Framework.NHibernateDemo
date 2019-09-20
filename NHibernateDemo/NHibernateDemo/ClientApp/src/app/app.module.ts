import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './Components/Players/players-list/players-list.component';
import { PlayersDetailsComponent } from './Components/Players/players-details/players-details.component';
import { TeamsListComponent } from './Components/Teams/teams-list/teams-list.component';
import { TeamsDetailsComponent } from './Components/Teams/teams-details/teams-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PlayersListComponent,
    PlayersDetailsComponent,
    TeamsListComponent,
    TeamsDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PlayersListComponent, pathMatch: 'full' },
      { path: 'players', component: PlayersListComponent, pathMatch: 'full' },
      { path: 'players-add', component: PlayersDetailsComponent, pathMatch: 'full' },
      { path: 'players-edit', component: PlayersDetailsComponent, pathMatch: 'full' },
      { path: 'teams', component: TeamsListComponent, pathMatch: 'full' },
      { path: 'teams-add', component: TeamsDetailsComponent, pathMatch: 'full' },
      { path: 'teams-add', component: TeamsDetailsComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
