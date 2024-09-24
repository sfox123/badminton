"use client";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ExpandableCardDemo } from "@/components/ui/Live";

export default function Page() {
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "matches"));
        const fetchedMatches = querySnapshot.docs.map((doc) => doc.data());
        const activeMatches = fetchedMatches.filter((match) => match.active);
        setMatches(activeMatches);
      } catch (error) {
        console.error("Error fetching matches: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {matches.length > 0 ? (
        <ExpandableCardDemo matches={matches} />
      ) : (
        <div>No active matches found</div>
      )}
    </div>
  );
}
