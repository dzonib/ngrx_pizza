import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from "./stores";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...effects]
})
export class CoreModule {}
