import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
// import { Observable } from "rxjs/Observable";

import * as fromStore from "./data/stores";
import { Observable } from "rxjs";
import { Pizza } from "./data/models/pizza.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.store.dispatch(new fromStore.LoadPizzas());
    // console.log(this.store.subscribe(data => console.log(data)));
  }
}
