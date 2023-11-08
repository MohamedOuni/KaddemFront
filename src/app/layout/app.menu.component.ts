import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';
const TOKEN_KEY = 'auth-token';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent {

    model: any[] = [];
    constructor(public layoutService: LayoutService, private router: Router) { }
    
    ngOnInit() {
        this.updateMenuItems();
    }

    updateMenuItems() {
    

        this.model = [
         
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Departement',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['/ey/pages/crud']

                       
                    },

                ]
            },
        ];
    }

}