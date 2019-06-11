import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { reducers } from "./stores";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("products", reducers)],
  providers: []
})
export class CoreModule {}
