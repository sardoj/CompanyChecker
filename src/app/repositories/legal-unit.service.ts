import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegalUnitRepository {

    constructor(private api:ApiService) { }

    public search(params?:string) {
        return this.api.search('unites_legales', params);
    }

    public retrieve(siret:string) {
        return this.api.retrieve('unites_legales', siret);
    }

}
