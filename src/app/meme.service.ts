import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private http: HttpClient) {}

  value: any;
  boxes: any;

  getMemeData(): Observable<any> {
    return this.http.get('https://api.imgflip.com/get_memes');
  }

  makeMemeData(meme_id: string, captions: string[]): Observable<any> {
    let httpParams = new HttpParams()
      .set('username', '<your_username>')
      .set('password', '<your_password>')
      .set('template_id', meme_id);
    captions.forEach(
      (val, index) =>
        (httpParams = httpParams.set(`boxes[${index}][text]`, val))
    );

    return this.http.get('https://api.imgflip.com/caption_image', {
      params: httpParams,
    });
  }
}
