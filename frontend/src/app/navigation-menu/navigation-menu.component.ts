import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationMenuItem } from './navigation-menu.model';

@Component({
    selector: 'app-navigation-menu',
    styleUrls: ['./navigation-menu.component.scss'],
    templateUrl: './navigation-menu.template.html',
})

export class NavigationMenuComponent implements OnInit {
    @Output() navigationMenuAction: EventEmitter<NavigationMenuItem>;
    menuItems: NavigationMenuItem[] = [];
    selectedItem: number;
    showMenu: boolean;

    constructor(private router: Router) {
        this.navigationMenuAction = new EventEmitter<NavigationMenuItem> ();
    }

    ngOnInit(): void {
        this.selectedItem = -1;
        this.showMenu = false;
        this.prepareMenu();
    }

    transformMenu(): void {
        this.showMenu = !this.showMenu;
    }

    selectMenuItem(id: number): void {
        const item = this.menuItems.filter((menu) => menu.id === id)[0];
        this.router.navigate([item.routerLink]);
        this.selectedItem = id;
    }

    private prepareMenu(): void {
        this.menuItems = [
            {
                id: 0,
                label: 'Classify Image',
                routerLink: '/identify-image',
            },
            {
                id: 1,
                label: 'Update Document',
                routerLink: '/modify-document',
            },
        ];
    }
}
