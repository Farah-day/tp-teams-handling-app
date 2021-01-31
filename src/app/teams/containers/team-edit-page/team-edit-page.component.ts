import { Component, OnInit } from '@angular/core';
import {Team} from "@team-handling/teams/models/team";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "@team-handling/teams/services/team.service";

@Component({
  selector: 'app-team-edit-page',
  templateUrl: './team-edit-page.component.html',
  styleUrls: ['./team-edit-page.component.scss']
})
export class TeamEditPageComponent implements OnInit {
  currentTeam!: Team;
  editTeamForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.pullTeam()
      .subscribe(team => this.initElements(team));
  }

  cancel() {
    this.router.navigate(['teams']);
  }

  updateTeam() {
    if (this.editTeamForm.invalid) {
      return
    }

    const team: Team = {
      id: this.editTeamForm.value.id,
      name: this.editTeamForm.value.name,
      slogan: this.editTeamForm.value.slogan
    };

    this.teamService
      .updateTeam(this.currentTeam.id, team)
      .subscribe(_ => this.router.navigate([`teams/${this.currentTeam.id}`]));
  }

  private initElements(currentTeam: Team) {
    this.currentTeam = currentTeam;

    this.editTeamForm = this.fb.group({
      name: [currentTeam.name, Validators.required],
      slogan: [currentTeam.slogan, Validators.required]
    });
  }
}
