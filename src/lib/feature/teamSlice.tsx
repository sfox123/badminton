import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TeamState {
  teamA: string;
  teamA_Group: string;
  teamB: string;
    teamB_Group: string;
    matchType: string;
}

const initialState: TeamState = {
  teamA: '',
  teamA_Group: '',
  teamB: '',
    teamB_Group: '',
    matchType: '',
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeamA: (state, action: PayloadAction<{ team: string; group: string }>) => {
      state.teamA = action.payload.team;
      state.teamA_Group = action.payload.group;
    },
    setTeamB: (state, action: PayloadAction<{ team: string; group: string }>) => {
      state.teamB = action.payload.team;
      state.teamB_Group = action.payload.group;
      },
      setMatchType: (state, action: PayloadAction<string>) => {
          state.matchType = action.payload
        }
  },
});

export const { setTeamA, setTeamB,setMatchType } = teamSlice.actions;
export default teamSlice.reducer;