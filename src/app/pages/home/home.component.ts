import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  characters: any = [];

  constructor(private charactersService: CharactersService) {}
  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((response: any) => {
      this.characters = response.results;
      console.log(this.characters);
    });
  }
}
