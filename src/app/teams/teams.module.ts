import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamListPageComponent} from './containers/team-list-page/team-list-page.component';
import {MatCardModule} from "@angular/material/card";
import {TeamDetailPageComponent} from "@team-handling/teams/containers/team-detail-page/team-detail-page.component";
import {MatButtonModule} from "@angular/material/button";
import { TeamAddPageComponent } from './containers/team-add-page/team-add-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { TeamEditPageComponent } from './containers/team-edit-page/team-edit-page.component';


@NgModule({
  declarations: [
    TeamListPageComponent,
    TeamDetailPageComponent,
    TeamAddPageComponent,
    TeamEditPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TeamsModule {
}
