import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu-content',
  templateUrl: './nav-menu-content.component.html',
  styleUrls: ['./nav-menu-content.component.scss']
})
export class NavMenuContentComponent implements OnInit {

  constructor() { }

  public menuItems: MenuItem[] = [];


  ngOnInit(): void {
    this.buildMenuItems();
  }

  private buildMenuItems(): void {
    const menuItems: MenuItem[] = [];

    menuItems.push({
      label: "Dashboard",
      icon: "dashboard",
      routerLink: "/hotels/dashboard",
    });
    menuItems.push({
      label: "Favorites",
      icon: "favorite",
      routerLink: "/favorites",
    });
    menuItems.push({
      label: "Logout",
      icon: "exit_to_app",
      routerLink: "",
    });
    this.menuItems = menuItems;
  }
}

export interface MenuItem {
  label: string;
  icon: string;
  routerLink: string | string[];
}

