import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PropublicaService } from '../propublica.service';

@Component({
  selector: 'app-congress-form',
  templateUrl: './congress-form.component.html',
  styleUrls: ['./congress-form.component.css'],
  providers: [ PropublicaService ]
})
export class CongressFormComponent {
  legislatorsList: any[];

  constructor(private propublica: PropublicaService) { }

  getLegislators(legislators: string) {
    // this.propublica.getAllResponses(legislators).subscribe(response => {
    //   this.legislatorsList = response.json();
    // });
    this.propublica.getAllResponses(legislators).subscribe(response => {
      this.legislatorsList = response.json().results[0].members;
    })
    // this.legislatorsList = this.propublica.getAllResponses(legislators);
  }
}
