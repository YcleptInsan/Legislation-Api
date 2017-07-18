import { PROPUBLICA_API_KEY } from '../api-keys';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PropublicaService {

  constructor(private http: Http) { }

  getAllResponses() {
    let headers = new Headers();
    headers.append('X-API-Key', PROPUBLICA_API_KEY);
    this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: headers })
      .subscribe(response => {
        console.log(response.json());
      });
    }
}
