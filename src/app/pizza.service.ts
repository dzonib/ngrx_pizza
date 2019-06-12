import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";

import { Pizza } from "./data/models/pizza.model";

@Injectable({
  providedIn: "root"
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return of([
      {
        name: "Seaside Surfin'",
        toppings: [
          {
            id: 6,
            name: "mushroom"
          },
          {
            id: 7,
            name: "olive"
          },
          {
            id: 2,
            name: "bacon"
          },
          {
            id: 3,
            name: "basil"
          },
          {
            id: 1,
            name: "anchovy"
          },
          {
            id: 8,
            name: "onion"
          },
          {
            id: 11,
            name: "sweetcorn"
          },
          {
            id: 9,
            name: "pepper"
          },
          {
            id: 5,
            name: "mozzarella"
          }
        ],
        id: 2
      }
    ]);
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, payload);
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${payload.id}`, payload);
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http.delete<any>(`/api/pizzas/${payload.id}`);
  }
}
