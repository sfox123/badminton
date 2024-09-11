export interface Team {
    name: string;
    team: string | number | Array<string | number> | any;
    logo: string;
}

export interface Match {
    name: string;
    values: number[],
    playerCount: number;
}