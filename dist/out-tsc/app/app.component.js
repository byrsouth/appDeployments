import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.title = 'appDeployments';
    }
    ngOnInit() {
        this.httpService.getPosts().subscribe((response) => {
            this.documents = response;
        }, (error) => {
            console.log(error);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map