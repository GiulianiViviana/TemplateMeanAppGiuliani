import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  o : Observable<Object>;
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.o = this.http.get('https://3000-e8ad746d-1e02-48e9-9a6d-e4103ff17893.ws-eu0.gitpod.io/api');
      this.o.subscribe(this.getData);
    }
    getData = (data : Object) =>
   {
     this.results = data['results'];
   }

}
