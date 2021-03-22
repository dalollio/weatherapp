import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    map,
} from "rxjs/operators";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['home-component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private http:HttpClient
    ) {
        // Use the component constructor to inject providers.
    }

    previsaoTempo;

    ngOnInit(): void {
        this.http.get('https://api.hgbrasil.com/weather?key=99210911&user_ip=remote')
            .pipe(
                map((resp)=>{
                    this.previsaoTempo = resp;
                })
            ).subscribe()
        // Init your component properties here.
    }
}
