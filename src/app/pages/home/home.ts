import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private http: HttpClient) {
     this.getCharacters();
  }
  characterC:string = ""
  todos:any = "";


  getCharacters (){
  this.http.get("https://rickandmortyapi.com/api/character").subscribe((data:any) => {
    console.log(data)
    this.todos = data.results;
    
  });
  
}


}
