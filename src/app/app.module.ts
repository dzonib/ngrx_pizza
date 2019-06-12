import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule, MetaReducer } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./data/data.module";
import { PizzasService } from "./pizza.service";

const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({}),
    CoreModule,
    HttpClientModule
  ],
  providers: [PizzasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
