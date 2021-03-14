import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentRepository {

    constructor(private api:ApiService) { }

    public search(params?:string) {
        return this.api.search('etablissements', params);
    }

    public retrieve(siret:string) {
        return this.api.retrieve('etablissements', siret);
    }

    public searchByCity(city:string) {
        return this.search(`?libelle_commune=${city.toUpperCase()}`);
    }
}
