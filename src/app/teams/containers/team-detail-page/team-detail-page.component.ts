import {Component, OnInit} from '@angular/core';
import {Team} from "@team-handling/teams/models/team";
import {TeamService} from "@team-handling/teams/services/team.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team-detail-page',
  templateUrl: './team-detail-page.component.html',
  styleUrls: ['./team-detail-page.component.scss']
})
export class TeamDetailPageComponent implements OnInit {

  team: Team | null;

  constructor(private teamService: TeamService,
              private root: ActivatedRoute,
              private rooter: Router) {
    this.team = null;
  }

  ngOnInit(): void {
    /*
        this.root.params.pipe(
          mergeMap(params => this.teamService.getTeamById(params['id'])))
          .subscribe(team => this.team = team)
    */
    this.teamService.pullTeam().subscribe(team => this.team = team);
  }

  back(): void {
    this.rooter.navigate([`teams`]);
  }

  editTeam() {
    // @ts-ignore
    this.rooter.navigate([`teams/${this.team.id}/edit`]);
  }
}
