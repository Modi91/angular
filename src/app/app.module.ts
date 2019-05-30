import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoadingSpinnerComponent } from "./components/shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
