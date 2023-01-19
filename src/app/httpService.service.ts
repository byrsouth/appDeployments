import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DeployData } from './deploy-data-model'

@Injectable({
   providedIn: 'root',
})
export class HttpService {
   private url =
      'https://httpappdeployment.azurewebsites.net/api/httpappdeploymentout';

   constructor(private http: HttpClient) {}
   
   getPosts() {
      return this.http.get<DeployData[]>(this.url).pipe(
        retry(2)       
      );
   }
}
