"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

import { MatchLive, Score, ExpandableCardDemoProps, Player } from "@/app/types";

export function ExpandableCardDemo({ matches }: ExpandableCardDemoProps) {
  const [active, setActive] = useState<MatchLive | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.teamA}-${active.teamB}-${id}`}
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
              onClick={() => setActive(null)}
            ></motion.button>
            <motion.div
              layoutId={`card-${active.teamA}-${active.teamB}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.teamA}-${active.teamB}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.teamA} VS {active.teamB}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.currentRound}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      Current Round: {active.currentRound + 1}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <h4>Scores:</h4>
                    <ul>
                      {active.scores.map((score: Score, roundIndex: number) => (
                        <li key={roundIndex}>
                          Round {roundIndex + 1}: {active.teamA} {score.teamA} -{" "}
                          {active.teamB} {score.teamB}
                        </li>
                      ))}
                    </ul>
                    <h4>Team A Players:</h4>
                    <ul>
                      {active.teamAPlayers.map(
                        (player: Player, playerIndex: number) => (
                          <li key={playerIndex}>
                            {player.firstName} {player.lastName}
                          </li>
                        )
                      )}
                    </ul>
                    <h4>Team B Players:</h4>
                    <ul>
                      {active.teamBPlayers.map(
                        (player: Player, playerIndex: number) => (
                          <li key={playerIndex}>
                            {player.firstName} {player.lastName}
                          </li>
                        )
                      )}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {matches.map((match: MatchLive, index: number) => (
          <motion.div
            layoutId={`card-${match.teamA}-${match.teamB}-${id}`}
            key={`card-${match.teamA}-${match.teamB}-${id}`}
            onClick={() => setActive(match)}
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
    </>
  );
}
