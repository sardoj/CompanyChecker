import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    // Documentation API: https://entreprise.data.gouv.fr/api_doc/sirene

    public company:any;

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    searchCompany() {
        let url: string = "https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/";
        let siret: string = "52282368100047";

        this.http.get(url + siret).subscribe((response) => {
            this.company = response;
        });
    }
}
