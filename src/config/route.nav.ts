export interface IRouteNav {
    name: string;
    route: string;
}

export const routeNav: Array<IRouteNav> = [
    {
        name: 'General',
        route: '/'
    },
    {
        name: 'Countries',
        route: '/countries'
    },
    {
        name: 'Graphs',
        route: '/graphs'
    },
    {
        name: 'Death Rat',
        route: '/death-rat'
    },
];
