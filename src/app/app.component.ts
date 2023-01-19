import { Component, OnInit } from '@angular/core';
import { DeployData } from './deploy-data-model';
import { HttpService } from './httpService.service';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   title = 'appDeployments';
   documents!: DeployData[];

   constructor(private httpService: HttpService) {}
   ngOnInit() {
      this.httpService.getPosts().subscribe(
         (response) => {
            this.documents = response;
         },
      );
   }
}
