"use client";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { teams } from "@/lib/data";
import { MatchLive, Score } from "@/app/types";

export default function Page() {
  const [matches, setMatches] = useState<MatchLive[]>([]);
  const [activeMatchId, setActiveMatchId] = useState<string | null>(null);
  const [activeMatch, setActiveMatch] = useState<MatchLive | null>(null);
  const [teamAScore, setTeamAScore] = useState<number>(0);
  const [teamBScore, setTeamBScore] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "matches"));
      const fetchedMatches = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as MatchLive)
      );
      const activeMatches = fetchedMatches.filter((match) => match.active);
      setMatches(activeMatches);
    } catch (error) {
      console.error("Error fetching matches: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeMatchId) {
      const updatedActiveMatch = matches.find(
        (match) => match.id === activeMatchId
      );
      if (updatedActiveMatch) {
        setActiveMatch(updatedActiveMatch);
        setTeamAScore(
          updatedActiveMatch.scores[updatedActiveMatch.currentRound]?.teamA ?? 0
        );
        setTeamBScore(
          updatedActiveMatch.scores[updatedActiveMatch.currentRound]?.teamB ?? 0
        );
      }
    }
  }, [matches, activeMatchId]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMatchId(null);
        setActiveMatch(null);
      }
    }

    if (activeMatch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeMatch]);

  useOutsideClick(ref, () => {
    setActiveMatchId(null);
    setActiveMatch(null);
  });

  const getTeamLogo = (teamName: string) => {
    const team = teams.find((t) => t.name === teamName);
    return team ? team.logo : "";
  };

  return (
    <div>
      {matches.length > 0 ? (
        <>
          <ul className="max-w-2xl mx-auto w-full gap-4">
            {matches.map((match: MatchLive, index: number) => (
              <motion.div
                layoutId={`card-${match.teamA}-${match.teamB}-${id}`}
                key={`card-${match.teamA}-${match.teamB}-${id}`}
                onClick={() => {
                  setActiveMatchId(match.id);
                  setActiveMatch(match);
                  setTeamAScore(match.scores[match.currentRound]?.teamA ?? 0);
                  setTeamBScore(match.scores[match.currentRound]?.teamB ?? 0);
                }}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <div>
                    <motion.h3
                      layoutId={`title-${match.teamA}-${match.teamB}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {match.teamA} VS {match.teamB}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${match.currentRound}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                    >
                      Current Round: {match.currentRound + 1}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${match.teamA}-${match.teamB}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </ul>
          <AnimatePresence>
            {activeMatch && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeMatch ? (
              <div className="fixed inset-0 flex items-center justify-center z-[100]">
                <motion.button
                  key={`button-${activeMatch.teamA}-${activeMatch.teamB}-${id}`}
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => {
                    setActiveMatchId(null);
                    setActiveMatch(null);
                  }}
                ></motion.button>
                <motion.div
                  layoutId={`card-${activeMatch.teamA}-${activeMatch.teamB}-${id}`}
                  ref={ref}
                  className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-neutral-900 overflow-hidden"
                >
                  <div className="p-8 flex flex-col items-center space-y-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-neutral-200">
                      Live
                    </h2>
                    <div className="flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16">
                      <div className="flex flex-col items-center">
                        <Image
                          src={getTeamLogo(activeMatch.teamA)}
                          alt={`${activeMatch.teamA} logo`}
                          width={150}
                          height={150}
                          className=""
                        />
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-neutral-200 mt-4">
                          {activeMatch.teamA}
                        </span>
                      </div>
                      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-neutral-200">
                        {teamAScore}
                      </span>
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-neutral-200 mx-4">
                        VS
                      </span>
                      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-neutral-200">
                        {teamBScore}
                      </span>
                      <div className="flex flex-col items-center">
                        <Image
                          src={getTeamLogo(activeMatch.teamB)}
                          alt={`${activeMatch.teamB} logo`}
                          width={150}
                          height={150}
                          className=""
                        />
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-neutral-200 mt-4">
                          {activeMatch.teamB}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-neutral-200">
                      SCORES
                    </h4>
                    <div className="text-neutral-600 text-xl md:text-2xl lg:text-3xl dark:text-neutral-400 flex flex-wrap justify-center gap-8">
                      {activeMatch.scores.map(
                        (score: Score, roundIndex: number) => (
                          <p className="mt-4" key={roundIndex}>
                            Round {roundIndex + 1}: {score.teamA} -{" "}
                            {score.teamB}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </>
      ) : (
        <div>No active matches found</div>
      )}
    </div>
  );
}
