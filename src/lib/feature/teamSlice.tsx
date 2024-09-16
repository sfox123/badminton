import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  firstName: string;
  lastName: string;
}

interface TeamState {
  teamA: string;
  teamA_Group: string;
  teamB: string;
  teamB_Group: string;
  matchType: string;
  teamAPlayers: Player[];
  teamBPlayers: Player[];
  selectedUmpire: string;
}

const initialState: TeamState = {
  teamA: "",
  teamA_Group: "",
  teamB: "",
  teamB_Group: "",
  matchType: "",
  teamAPlayers: [],
  teamBPlayers: [],
  selectedUmpire: "",
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeamA: (
      state,
      action: PayloadAction<{ team: string; group: string }>
    ) => {
      state.teamA = action.payload.team;
      state.teamA_Group = action.payload.group;
    },
    setTeamB: (
      state,
      action: PayloadAction<{ team: string; group: string }>
    ) => {
      state.teamB = action.payload.team;
      state.teamB_Group = action.payload.group;
    },
    setMatchType: (state, action: PayloadAction<string>) => {
      state.matchType = action.payload;
    },
    addPlayerToTeamA: (state, action: PayloadAction<Player>) => {
      state.teamAPlayers.push(action.payload);
    },
    addPlayerToTeamB: (state, action: PayloadAction<Player>) => {
      state.teamBPlayers.push(action.payload);
    },
    removePlayerFromTeamA: (state, action: PayloadAction<number>) => {
      state.teamAPlayers.splice(action.payload, 1);
    },
    removePlayerFromTeamB: (state, action: PayloadAction<number>) => {
      state.teamBPlayers.splice(action.payload, 1);
    },
    setSelectedUmpire: (state, action: PayloadAction<string>) => {
      state.selectedUmpire = action.payload;
    },
  },
});

export const {
  setTeamA,
  setTeamB,
  setMatchType,
  addPlayerToTeamA,
  addPlayerToTeamB,
  removePlayerFromTeamA,
  removePlayerFromTeamB,
  setSelectedUmpire,
} = teamSlice.actions;
export default teamSlice.reducer;
