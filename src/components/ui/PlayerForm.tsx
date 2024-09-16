"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import {
  addPlayerToTeamA,
  addPlayerToTeamB,
  removePlayerFromTeamA,
  removePlayerFromTeamB,
} from "@/lib/feature/teamSlice";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { Player } from "@/app/types";
import { match } from "@/lib/data";
import { IconTrash } from "@tabler/icons-react";

const PlayerForm = ({
  teamId,
  teamName,
  matchType,
}: {
  teamId: string;
  teamName: string;
  matchType: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const teamPlayers = useSelector((state: RootState) =>
    teamId === "teamA" ? state.team.teamAPlayers : state.team.teamBPlayers
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    const matchTypeData = match.find((m) => m.name === matchType);
    if (matchTypeData) {
      setPlayerCount(matchTypeData.playerCount);
    }
  }, [matchType]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamPlayers.length >= playerCount) return;

    const player = { firstName, lastName };
    if (teamId === "teamA") {
      dispatch(addPlayerToTeamA(player));
    } else {
      dispatch(addPlayerToTeamB(player));
    }
    setFirstName("");
    setLastName("");
  };

  const handleRemovePlayer = (index: number) => {
    if (teamId === "teamA") {
      dispatch(removePlayerFromTeamA(index));
    } else {
      dispatch(removePlayerFromTeamB(index));
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Player's Arena
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Team : {teamName}
      </p>

      <div className="mb-4 mt-5">
        {teamPlayers.map((player: Player, index: number) => (
          <div
            key={index}
            className="flex justify-between mb-4 items-center text-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 p-2 rounded"
          >
            <span>
              Player {index + 1}: {player.firstName} {player.lastName}
            </span>
            <button
              onClick={() => handleRemovePlayer(index)}
              className="hover:text-red-600 transition-colors duration-300"
            >
              <IconTrash size={16} />
            </button>
          </div>
        ))}
      </div>

      {teamPlayers.length < playerCount && (
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            + Add another player
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      )}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default PlayerForm;
