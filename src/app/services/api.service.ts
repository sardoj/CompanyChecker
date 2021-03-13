import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private endpointUrl:string = "https://entreprise.data.gouv.fr/api/sirene/v3";

    constructor(private http: HttpClient) { }

    public searchEstablishments(params:any = null) {
        return this.search('etablissements', params);
    }

    public searchLegalUnits(params:any = null) {
        return this.search('unites_legales', params);
    }

    public retrieveEstablishment(siret:string) {
        return this.retrieve('etablissements', siret);
    }

    public retrieveLegalUnit(siren:string) {
        return this.retrieve('unites_legales', siren);
    }

    private search(type:string, params:any = null) {
        let url:string = this.buildUrl(type);
        return this.http.get(url, {
            params: params
        });
    }

    private retrieve(type:string, siretOrSiren:string) {
        let url:string = this.buildUrl(type, siretOrSiren);
        return this.http.get(url);
    }

    private buildUrl(type:string, siretOrSiren?:string) {
        return `${this.endpointUrl}/${type}/${siretOrSiren}`;
    }

}
