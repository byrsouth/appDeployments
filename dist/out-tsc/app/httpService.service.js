import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.url = 'https://httpappdeployment.azurewebsites.net/api/httpappdeploymentout';
    }
    getPosts() {
        return this.http.get(this.url);
    }
};
HttpService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], HttpService);
export { HttpService };
//# sourceMappingURL=httpService.service.js.map