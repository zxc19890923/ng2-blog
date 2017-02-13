import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './components/app.component';
import {NavbarComponent} from "./components/navbar.component";
import {Angular2Component} from "./components/angular2.component";
import {NodeComponent} from "./components/node.component";
import {TechnologyComponent} from "./components/technology.component";
import {ArticalComponent} from "./components/artical.component";
import {ShareComponent} from "./components/share.componet";
import {ChartsComponent} from "./components/charts.component";
import {Ng2Echarts} from "ng2-echarts";

const myRouter:Routes = [
    {
        path: "ng2",
        component: Angular2Component
    },
    {
        path: "node",
        component: NodeComponent
    },
    {
        path: "**",
        redirectTo: "ng2"
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        Angular2Component,
        NodeComponent,
        TechnologyComponent,
        ArticalComponent,
        ShareComponent,
        ChartsComponent,
        Ng2Echarts
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(myRouter)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
