import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _apiKey: string = 'lzGpprBQqOzXOn34ly9r3jGNyNwBGlZM';
  private _urlBase: string = 'https://api.giphy.com/v1/gifs';

  private _tagHistory: string[] = [];

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }
  //limit to 10
  private organizeUniqueTags(tag:string):void {
    this._tagHistory = this._tagHistory.filter( t => t !== tag );

    this._tagHistory.unshift( tag );
    this._tagHistory = this._tagHistory.splice(0,10);

  }

  public searchTag( tag: string ):void {

    if ( tag.trim().length === 0 ) {
      return;
    }
    tag = tag.trim().toLowerCase();
    this.organizeUniqueTags(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', '12');

      //observable
    this.http.get<SearchResponse>(`${this._urlBase}/search?`, { params })
      .subscribe( (resp) => {

        this.gifList = resp.data;
        console.log({gifts: this.gifList});
      }

    );
  }

  constructor(private http: HttpClient) { }

}
