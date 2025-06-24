import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  imports: [],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css'
})
export class Episodes {
  results:any = ""
  constructor (private http: HttpClient){
    this.getepisode()

  }
  getepisode (){
    this.http.get("https://rickandmortyapi.com/api/episode").subscribe((data:any) => {
    console.log(data)
    this.results = data.results;
  });
  }

}
