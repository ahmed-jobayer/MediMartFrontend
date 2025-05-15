"use client";

import CustomButton from "@/components/shared/CustomButton";
import styles from "./HeroSection.module.css";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  // navigation
  const router = useRouter();

  return (
    <div
      className={`${styles.banner} relative container mx-auto border-2 border-white rounded-3xl mt-10`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl h-[500px] opacity-60 bg-gradient-to-r from-indigo-600 via-black to-purple-400"></div>

      {/* Foreground Content */}
      <div className="z-20 relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-pink-400">Medi</span>
          <span className="text-blue-500">Mart</span>
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-lg font-semibold max-w-2xl mb-10">
          Your one-stop destination for affordable and trusted medical products
          delivered with care.
        </p>
        <CustomButton
          textName="Shop Now"
          handleAnything={() => router.push("/shop")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
