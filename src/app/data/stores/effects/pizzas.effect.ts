import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as pizzaActions from "../actions/pizzas.action";
import * as fromServices from "../../../pizza.service";

@Injectable()
export class PizzasEffect {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSucess(pizzas)),
          // if there is error return observable of action
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
    })
  );
}
