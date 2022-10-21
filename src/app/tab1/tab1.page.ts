import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HTTP} from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private httpClient: HttpClient, private http: HTTP) {
    const formData = new FormData();
    formData.append('a', 'b');

    this.httpClient
      .post('https://httpbin.org/post', formData)
      .subscribe((data) => {
        console.log('HttpClient', JSON.stringify(data));
      });

    this.http
      .sendRequest('https://httpbin.org/post', {
        method: 'post',
        data: formData,
        serializer: 'multipart'
      })
      .then((data) => {
        console.log('http data', data.data);
      });
  }

}
