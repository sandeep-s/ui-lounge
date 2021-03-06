System.register(["angular2/core", "./contacts/contact-list.component", "./about/about.component", "./contacts/newcontact.component", "angular2/router", "./http/http-test.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, contact_list_component_1, about_component_1, newcontact_component_1, router_1, http_test_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (newcontact_component_1_1) {
                newcontact_component_1 = newcontact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app'
                }),
                core_1.View({
                    templateUrl: '../dev/app.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, http_test_component_1.HTTPTestComponent]
                }),
                router_1.RouteConfig([
                    { path: '/', component: contact_list_component_1.ContactListComponent, name: 'Contacts', useAsDefault: true },
                    { path: '/new', component: newcontact_component_1.NewContactComponent, name: 'Newcontact' },
                    { path: '/about/:contactid', component: about_component_1.AboutComponent, name: 'About' }
                ])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map