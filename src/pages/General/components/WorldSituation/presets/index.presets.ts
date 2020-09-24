import { WorldSituationCardProps } from "../props/index.props";

export const world_situation_card: Array<WorldSituationCardProps> = [
    {
        format: '0,0',
        description: 'laboratory confirmed cases of the disease',
        key: 'cases',
    },
    {
        format: '0,0',
        description: 'recovered from the coronavirus',
        activeClass: 'world-situation__card--50 world-situation__card--lightGreen',
        key: 'recovered',
    },
    {
        format: '0,0',
        description: 'deaths of people infected with coronavirus',
        activeClass: 'world-situation__card--50 world-situation__card--gray',
        key: 'deaths',
    },
    {
        format: '+0,0',
        description: 'new cases per day',
        activeClass: 'world-situation__card--33 world-situation__card--lightPink',
        key: 'todayCases',
    },
    {
        format: '+0,0',
        description: 'new recovered cases per day',
        activeClass: 'world-situation__card--33 world-situation__card--lightGreen',
        key: 'todayRecovered',
    },
    {
        format: '+0,0',
        description: 'new death cases per day',
        activeClass: 'world-situation__card--33 world-situation__card--gray',
        key: 'todayDeaths',
    },
];
