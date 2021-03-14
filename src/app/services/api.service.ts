import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private endpointUrl:string = "https://entreprise.data.gouv.fr/api/sirene/v3";

    constructor(private http: HttpClient) { }

    public search(type:string, params?:string) {
        let url:string = this.buildUrl(type);

        if (params) {
            url += params;
        }

        return this.http.get(url);
    }

    public retrieve(type:string, siretOrSiren:string) {
        let url:string = this.buildUrl(type, siretOrSiren);
        return this.http.get(url);
    }

    private buildUrl(type:string, siretOrSiren?:string) {
        let url = `${this.endpointUrl}/${type}/`;
        if (siretOrSiren) {
            url += siretOrSiren;
        }
        return url;
    }
}
