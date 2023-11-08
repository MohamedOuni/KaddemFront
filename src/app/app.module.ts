import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ButtonModule } from 'primeng/button';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ButtonModule,

    ],
    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
