import { Component } from "@angular/core";

@Component({
  selector: "app-exemple-component",
  templateUrl: "exemple.html",
  styleUrls: ["exemple.scss"]
})
export class ExempleComponent {
  cartes = ["Carte 1", "Carte 2", "Carte 3", "Carte 4", "Carte 5", "Carte 6"];
}
