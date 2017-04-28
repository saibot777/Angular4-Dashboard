import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Cards',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'glyphicon-flag',
                        route: 'authenticated/card-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'glyphicon-flag',
                        route: 'authenticated/card-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'glyphicon-flag',
                        route: 'authenticated/card-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'authenticated/card-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'authenticated/card-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'authenticated/card-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Card Control',
                icon: 'glyphicon-th-list',
                route: 'authenticated/card-control',
                submenu: null
            },
            {
                text: 'User Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
];
