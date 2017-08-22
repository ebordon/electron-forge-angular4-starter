"use strict";
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const core_2 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.name = 'electron-forge';
    }
    ngOnInit() {
        console.log('component initialized');
    }
};
AppComponent = tslib_1.__decorate([
    core_2.Component({
        selector: 'app-root',
        templateUrl: './appTemplate.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.component.js.map