import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class Characters {
results:any= ""
  constructor(private http: HttpClient) {
    this.getCharacters()
     
  }
  
getCharacters (){
  this.http.get("https://rickandmortyapi.com/api/character").subscribe((data:any) => {
    console.log(data)
    this.results = data.results;
  });
}

  

}
