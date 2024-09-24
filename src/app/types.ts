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

export interface Player {
  firstName: string;
  lastName: string;
}

export interface Umpire {
  name: string;
  pin: string;
}

export type Score = {
  teamA: number;
  teamB: number;
};

export type MatchLive = {
  scores: Score[];
  currentRound: number;
  selectedUmpire: string;
  teamBPlayers: Player[];
  teamA_Group: string;
  teamAPlayers: Player[];
  matchType: string;
  teamB: string;
  active: boolean;
  winner: string | null;
  teamA: string;
  matchStats: any[];
  teamB_Group: string;
};

export type ExpandableCardDemoProps = {
  matches: MatchLive[];
};
