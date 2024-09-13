export interface Team {
  name: string;
  team: Array<string>;
  logo: string;
}

export interface Match {
  name: string;
  values: number[];
  playerCount: number;
}
