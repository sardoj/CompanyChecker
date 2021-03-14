import { EstablishmentRepository } from './../../repositories/establishment.service';
import { LegalUnitRepository } from './../../repositories/legal-unit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

    public areNoResults:boolean;
    public city:string;
    public establishment:Array<any> = [];

    constructor(private establishmentUnitRepository:EstablishmentRepository) { }

    ngOnInit() {
    }

    onClearSearch(args) {
        this.clearNoResultsMessage();
        this.clearEstablishments();
    }

    clearNoResultsMessage() {
        this.areNoResults = false;
    }

    clearEstablishments() {
        this.establishment = [];
    }

    onSubmitSearch(args) {
        this.clearNoResultsMessage();
        this.clearEstablishments();

        this.establishmentUnitRepository.searchByCity(this.city)
            .subscribe((response:any) => {
                this.establishment = response.etablissements;
            }, (error:any) => {
                if (error.error.message === 'no results found') {
                    this.areNoResults = true;
                }
            });
    }

}
