import { Component, OnInit } from '@angular/core';
import { HttpService } from './httpService.service';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   title = 'appDeployments';
   documents: any;

   constructor(private httpService: HttpService) {}
   ngOnInit() {
      this.httpService.getPosts().subscribe(
         (response) => {
            this.documents = response;
         },
         (error) => {
            console.log(error);
         }
      );
   }
}
