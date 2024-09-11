"use client";

import Lottie from "react-lottie";
import animationData from "@/json/shuttlecock.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LottieAnimation;