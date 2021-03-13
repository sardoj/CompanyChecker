import { ApiService } from './../../services/api.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    // Documentation API: https://entreprise.data.gouv.fr/api_doc/sirene

    public company:any;

    constructor(private api: ApiService) {}

    ngOnInit() {}

    searchCompany() {
        let siret: string = "52282368100047";

        this.api.retrieveEstablishment(siret).subscribe((response) => {
            this.company = response;
        });
    }
}
