import { EstablishmentRepository } from './../../repositories/establishment.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from "@angular/core";
import { SearchBar } from '@nativescript/core';
import { Router } from '@angular/router';

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

    constructor(
        private establishmentRepository:EstablishmentRepository,
        private router:Router
    ) {}

    ngOnInit() {}

    onClearSearch(args) {
        this.clearNoResultsMessage();
        this.clearCompany();
    }

    clearNoResultsMessage() {
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
        this.company = null;

        this.establishmentRepository.retrieve(this.siret).subscribe((response) => {
            this.company = response;
            this.areNoResults = false;
        },
        (error) => {
            if (error.error.message === 'no results found') {
                this.areNoResults = true;
            };
        });
    }

    advancedSearch() {
        this.router.navigateByUrl('/advanced');
    }
}
