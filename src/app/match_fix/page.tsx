"use client";

import { useSelector, useDispatch } from "react-redux";
import PlayerForm from "@/components/ui/PlayerForm";
import { RootState, AppDispatch } from "@/lib/store";
import { setSelectedUmpire } from "@/lib/feature/teamSlice";
import { UmpireData } from "@/lib/data";

const MatchFix = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teamState = useSelector((state: RootState) => state.team);

  const handleUmpireChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedUmpire(e.target.value));
  };

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-white mb-8">MATCH TYPE : {teamState.matchType}</h1>
      <div className="flex gap-3 flex-row w-full">
        <PlayerForm
          teamId="teamA"
          matchType={teamState.matchType}
          teamName={teamState.teamA}
        />
        <PlayerForm
          teamId="teamB"
          matchType={teamState.matchType}
          teamName={teamState.teamB}
        />
      </div>
      <div className="mt-6">
        <select
          id="umpire"
          value={teamState.selectedUmpire}
          onChange={handleUmpireChange}
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 text-white p-2 rounded-md shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-colors duration-300"
        >
          <option value="" disabled className="custom-select-option">
            UMPIRE
          </option>
          {UmpireData.map((umpire, index) => (
            <option
              key={index}
              value={umpire.name}
              className="custom-select-option"
            >
              {umpire.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MatchFix;
