import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamListPageComponent} from "@team-handling/teams/containers/team-list-page/team-list-page.component";
import {TeamDetailPageComponent} from "@team-handling/teams/containers/team-detail-page/team-detail-page.component";
import {TeamAddPageComponent} from "@team-handling/teams/containers/team-add-page/team-add-page.component";
import {TeamEditPageComponent} from "@team-handling/teams/containers/team-edit-page/team-edit-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamListPageComponent
  },
  {
    path: 'teams/add',
    component: TeamAddPageComponent
  },
  {
    path: 'teams/:{id}/edit',
    component: TeamEditPageComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
