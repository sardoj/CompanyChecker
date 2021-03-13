import { ApiService } from './../../services/api.service';
import { Component, OnInit } from "@angular/core";
import { SearchBar } from '@nativescript/core';

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    // Documentation API: https://entreprise.data.gouv.fr/api_doc/sirene

    public company:any;
    public siret:string;
    public areNoResults:boolean;

    constructor(private api: ApiService) {}

    ngOnInit() {}

    onClearSearch(args) {
        this.clearNoResults();
        this.clearCompany();
    }

    clearNoResults() {
        this.areNoResults = false;
    }

    clearCompany() {
        this.company = null;
    }

    onSubmitSearch(args) {
        if (this.isSiretNotEmpty()) {
            this.searchCompany();
        }
    }

    isSiretNotEmpty() {
        return this.siret ? true : false;
    }

    searchCompany() {
        this.api.retrieveEstablishment(this.siret).subscribe((response) => {
            this.company = response;
            this.areNoResults = false;
        },
        (error) => {
            if (error.error.message === 'no results found') {
                this.areNoResults = true;
            };
        });
    }
}
