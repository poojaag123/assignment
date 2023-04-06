import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  //url: 'https://comicvine.gamespot.com/characters';
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(
      'https://comicvine.gamespot.com/api/characters/?api_key=8b34ea95578a90df2c9e7db31b2628b4f5a08d24'
    );
  }
}
