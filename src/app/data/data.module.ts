import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule, Actions } from "@ngrx/effects";

import { reducers, effects } from "./stores";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...effects, Actions]
})
export class CoreModule {}
