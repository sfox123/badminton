"use client";

import { useRouter } from "next/navigation";
import { buttonData } from "../lib/data";
import Button from '@/components/ui/Button';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    router.push(`/${path.toLowerCase()}`);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        {buttonData.map((button) => (
          <Button
            key={button.name}
            label={button.name}
            Icon={button.icon}
            onClick={() => handleButtonClick(button.name)}
          />
        ))}
      </div>
    </main>
  );
}