"use client";
import React, { useEffect, useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Loading from "@/components/ui/Loading";

export default function Page() {
  const [match, setMatch] = useState<any>(null);
  const [teamA, setTeamA] = useState<string>("");
  const [teamB, setTeamB] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const matchId =
    typeof window !== "undefined"
      ? new URL(window.location.href).pathname.split("/score/")[1]
      : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (matchId) {
          const matchRef = doc(db, "matches", matchId);
          const matchDoc = await getDoc(matchRef);
          if (matchDoc.exists()) {
            const matchData = matchDoc.data();
            setMatch(matchData);
            setTeamA(matchData.teamA);
            setTeamB(matchData.teamB);
            console.log("Match data:", matchData);
          } else {
            console.error("No such document!");
          }
        } else {
          console.error("Invalid match ID");
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [matchId]);

  const handleScoreChange = async (team: "teamA" | "teamB", delta: number) => {
    if (!match || !match.scores || match.currentRound === undefined) return;

    const currentRound = match.currentRound;
    const newScores = [...match.scores];

    if (team === "teamA") {
      newScores[currentRound].teamA = Math.max(
        0,
        newScores[currentRound].teamA + delta
      );
    } else {
      newScores[currentRound].teamB = Math.max(
        0,
        newScores[currentRound].teamB + delta
      );
    }

    const updatedMatch = {
      ...match,
      scores: newScores,
    };

    setMatch(updatedMatch);

    // Update Firestore
    if (matchId) {
      const matchRef = doc(db, "matches", matchId);
      await updateDoc(matchRef, updatedMatch);
    }
  };

  const handleRoundButtonClick = () => {
    console.log("Clicked");
  };

  if (loading) {
    return <Loading />;
  }

  if (!match || !match.scores || match.currentRound === undefined) {
    return <div>Error: Match data is not available.</div>;
  }

  const isRoundComplete =
    match.scores[match.currentRound]?.teamA >= 21 ||
    match.scores[match.currentRound]?.teamB >= 21;

  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex flex-col justify-center items-center flex-1 bg-red-500">
        <h2>{teamA}</h2>
        <div className="flex items-center space-x-4 mt-5">
          <button
            className="bg-white text-black p-4 rounded-full hover:bg-gray-200 active:bg-gray-300"
            onClick={() => handleScoreChange("teamA", 1)}
          >
            <IconPlus size={24} />
          </button>
          <h1 className="text-4xl">
            {match.scores[match.currentRound]?.teamA || 0}
          </h1>
          <button
            className="bg-white text-black p-4 rounded-full hover:bg-gray-200 active:bg-gray-300"
            onClick={() => handleScoreChange("teamA", -1)}
          >
            <IconMinus size={24} />
          </button>
        </div>
      </div>
      <div className="text-black font-bold text-center p-2 bg-gray-300">
        <h1>
          Round {match.currentRound + 1}
          {isRoundComplete && (
            <button
              className="ml-4 bg-blue-500 text-white p-2 rounded"
              onClick={handleRoundButtonClick}
            >
              Next Round
            </button>
          )}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 bg-blue-500">
        <h2>{teamB}</h2>
        <div className="flex items-center space-x-4 mt-5">
          <button
            className="bg-white text-black p-4 rounded-full hover:bg-gray-200 active:bg-gray-300"
            onClick={() => handleScoreChange("teamB", 1)}
          >
            <IconPlus size={24} />
          </button>
          <h1 className="text-4xl">
            {match.scores[match.currentRound]?.teamB || 0}
          </h1>
          <button
            className="bg-white text-black p-4 rounded-full hover:bg-gray-200 active:bg-gray-300"
            onClick={() => handleScoreChange("teamB", -1)}
          >
            <IconMinus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
