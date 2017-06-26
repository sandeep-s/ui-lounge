System.register(["angular2/core", "./http-test.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_test_service_1, HTTPTestComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }
        ],
        execute: function () {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onGet = function () {
                    var _this = this;
                    console.log('Getting details now.');
                    this._httpService.getAirportDetails().subscribe(function (data) { return _this.getAirportDetails = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished Get'); });
                };
                return HTTPTestComponent;
            }());
            HTTPTestComponent = __decorate([
                core_1.Component({
                    selector: 'http-test',
                    template: "\n    <button (click)=\"onGet()\">Get Aiport Details</button><br/>\n    <div>Output:{{getAirportDetails}}</div><br/>   \n  ",
                    providers: [http_test_service_1.HTTPTestService]
                }),
                __metadata("design:paramtypes", [http_test_service_1.HTTPTestService])
            ], HTTPTestComponent);
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    };
});
//# sourceMappingURL=http-test.component.js.map